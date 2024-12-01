import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import FormFooter from '../../components/FormFooter';
import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setisSubmitting] = useState(false)
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const { handleLogin } = useAuth();

    const handleSubmit = async () => {
        try {
            const isSuccess = await handleLogin(form.username, form.password)

            if (isSuccess) {
                router.push('/home');
                console.log("success!")
            } else {
                alert('Error Logging in!');
            }
        } catch (error) {
            alert('An error occured please try again later.');
        }
    }


    return (
        <SafeAreaView className='bg-background-primary h-full'>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className=" w-full h-full items-center justify-center px-10 mt-[-40px]">
                    <FormHeader title='Login' />

                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(e) => {
                            console.log("Username updated: ", e); // Debug log
                            setForm({ ...form, username: e });
                        }}
                        otherStyles="mt-7"
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => {
                            console.log("Password updated: ", e); // Debug log
                            setForm({ ...form, password: e });
                        }}
                        otherStyles="mt-3 flex-row"
                        secureTextEntry={!showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        showPassword={showPassword}
                    />

                    <CustomButton
                        title="Login"
                        handlePress={handleSubmit}
                        containerStyles="w-full mt-3"
                        textStyles='text-2xl'
                        isLoading={isSubmitting}
                    />

                    <FormFooter textValue="Don't have an account yet?" link='/signup' linkValue="Signup" />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Login