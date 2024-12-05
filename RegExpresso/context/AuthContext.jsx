import React, { createContext, useState, useEffect } from "react";
import { endpoints } from "../constants/endpoints";
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(SecureStore.getItem("token") || null);

    useEffect(() => {
        if (!token) return;

        const userName = getUserData(token)
        setUser(userName)
    }, [token])

    const handleLogin = async (username, password) => {
        try {
            const response = await fetch(endpoints.login, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log("Login Data: ", data);
            if (response.ok) {
                setToken(data.token);
                setUser(data.data.username);
                // localStorage.setItem('token', data.token);
                await SecureStore.setItemAsync("token", data.token)
                console.log(await SecureStore.getItemAsync("token"))
                return true;
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Login Failed: ', error.message);
            return false;
        }
    };

    const handleSignup = async (username, email, password) => {
        try {
            const response = await fetch(endpoints.signup, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error Response:', errorData);
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await response.json();
            console.log('Signup Response:', data);
            setToken(data.token);
            setUser(data.user);
            await SecureStore.setItemAsync("token", data.token);
            return true;
        } catch (error) {
            console.error('Signup Failed: ', error.message);
            return false;
        }
    };


    const handleLogout = async () => {
        try {
            await fetch(endpoints.logout, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            setUser(null);
            setToken(null);
            // localStorage.removeItem('token');
            await SecureStore.deleteItemAsync('token')
        } catch (error) {
            console.error("Error Logging Out: ", error);
        }
    };

    const checkUsernameExists = async (username) => {
        try {
            const response = await fetch(`${endpoints.checkUsername}?username=${username}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const data = await response.json();
                return data.exists;
            } else {
                console.error("Failed to check username existence.");
                return false;
            }
        } catch (error) {
            console.error("Error checking username:", error);
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, handleLogin, handleSignup, handleLogout, checkUsernameExists }}>
            {children}
        </AuthContext.Provider>
    );
};

export const getUserData = async (token) => {
    if (!token) {
        console.error("No Token Found");
        return null;
    }
    try {
        const response = await fetch(endpoints.fetch, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            console.error("Failed to fetch user data");
            return null;
        }

        const data = await response.json();
        return data.username;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

export const useAuth = () => React.useContext(AuthContext);