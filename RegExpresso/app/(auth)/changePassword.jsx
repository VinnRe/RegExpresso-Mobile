import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import FormHeader from '../../components/FormHeader';
import PasswordField from '../../components/PasswordField';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { endpoints } from '../../constants/endpoints';

const ChangePassword = () => {
    const { token } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [form, setForm] = useState({
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleSubmit = async (e) => {
        try {
            if (form.newPassword !== form.confirmNewPassword) {
                setErrorMessage('Passwords do not match.');
                return;
            }

            if (form.newPassword.length < 8) {
                setErrorMessage('Passwords must more than 8 characters long.');
                return;
            }
            
            setErrorMessage('');
            console.log('Password change submitted:', form.newPassword);
            
            const response = await fetch(endpoints.updatePassword, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    password: form.newPassword
                })
            })
            
            if (response.ok) {
                setSuccessMessage('Successfully changed your password!');
            }
            
            if (!response.ok) {
                setErrorMessage('Error changing password. Please try again later.');
                throw new Error(`Error: ${response.status}`);
            }
            
        } catch (error) {
            setErrorMessage('Error changing password. Please try again later.');
            console.error("Error: ", error)
            throw error
        }
    };

    return (
        <SafeAreaView className="bg-background-primary h-full">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full h-full items-center justify-center px-10 mt-[-40px]">
                    <FormHeader title="Change Password" textStyles="text-4xl" />

                    <PasswordField
                        title="New password"
                        value={form.newPassword}
                        handleChangeText={(e) =>
                            setForm({ ...form, newPassword: e })
                        }
                        otherStyles="mt-3 flex-row"
                    />

                    <PasswordField
                        title="Confirm new password"
                        value={form.confirmNewPassword}
                        handleChangeText={(e) =>
                            setForm({ ...form, confirmNewPassword: e })
                        }
                        otherStyles="mt-3 flex-row"
                    />

                    {errorMessage && (
                        <Text className='text-text-error font-poppinsMedium text-lg mt-3'>
                            {errorMessage}
                        </Text>
                    )}
                    
                    {successMessage && (
                        <Text className='text-text text-center font-poppinsMedium text-lg mt-3'>
                            {successMessage}
                        </Text>
                    )}

                    <CustomButton
                        title="Change Password"
                        handlePress={handleSubmit}
                        containerStyles="w-full mt-3"
                        textStyles='text-2xl'
                    />

                    <CustomButton
                        title="Back"
                        handlePress={() => {
                            router.back();
                        }}
                        containerStyles="w-full mt-3 bg-button-bgRed"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChangePassword;
