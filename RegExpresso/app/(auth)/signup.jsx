import { Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";
import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import FormFooter from '../../components/FormFooter';
import { useAuth } from '../../context/AuthContext';
import * as SecureStorage from 'expo-secure-store'

const Signup = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState("");
    const { handleSignup } = useAuth();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async () => {
        try {
            if (!form.username || !form.email || !form.password || !form.confirmPassword) {
                setIsErrorMessage("Please fill up all the fields!")
            }

            if (form.password.length < 8) {
                setIsErrorMessage("Password must be greater than or equal to 8.")
                return
            }

            if (form.password !== form.confirmPassword) {
                setIsErrorMessage("Passwords do not match!")
                return
            }

            const isSuccess = await handleSignup(form.username, form.email, form.password)
            if (isSuccess) {
                router.replace('/home');
                setIsErrorMessage("")
            } else {
                setIsErrorMessage("Please fill up all the fields!")
                return
            }

        } catch (error) {
            setIsErrorMessage("Oh no! An error occured please try again later.")
        }
    }

    return (
        <SafeAreaView className='bg-background-primary h-full'>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className=" w-full h-full items-center justify-center px-10">
                    <FormHeader
                        title='Signup'
                        textStyles='text-6xl'
                    />

                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                    />

                    <FormField
                        title='Email address'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-3"
                        keyboardType='email-address'
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-3 flex-row"
                        secureTextEntry={!showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        showPassword={showPassword}
                        isPasswordField={true}
                    />

                    <FormField
                        title='Confirm password'
                        value={form.confirmPassword}
                        handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                        otherStyles="mt-3 flex-row"
                        secureTextEntry={!showConfirmPassword}
                        togglePasswordVisibility={toggleConfirmPasswordVisibility}
                        showPassword={showConfirmPassword}
                        isPasswordField={true}

                    />

                    {isErrorMessage ? (
                        <Text className='text-text-error text-center font-poppinsRegular text-l mt-3'>
                            {isErrorMessage}
                        </Text>
                    ) : null}

                    <CustomButton
                        title="Create account"
                        handlePress={handleSubmit}
                        containerStyles="w-full mt-3"
                        textStyles='text-2xl'
                    />
                    <FormFooter textValue="Already have an account?" link='/login' linkValue="Login" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup