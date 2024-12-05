import { Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import FormFooter from '../../components/FormFooter';
import { useAuth } from '../../context/AuthContext';
import { router } from 'expo-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setisSubmitting] = useState(false);
    const [isWrongCreds, setIsWrongCreds] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
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
                setIsWrongCreds(false)
            } else {
                setIsWrongCreds(true)
            }
        } catch (error) {
            setIsServerError(true)
        }
    }


    return (
        <SafeAreaView className='bg-background-primary h-full'>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className=" w-full h-full items-center justify-center px-10 mt-[-40px]">
                    <FormHeader
                        title='Login'
                        textStyles='text-6xl' />

                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(e) => {
                            setForm({ ...form, username: e });
                            setIsServerError(false)
                        }}
                        otherStyles="mt-7"
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => {
                            setForm({ ...form, password: e });
                            setIsServerError(false);
                        }}
                        otherStyles="mt-3 flex-row"
                        secureTextEntry={!showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        showPassword={showPassword}
                    />

                    {isWrongCreds ? (
                        <>
                            <Text className='text-text-error font-poppinsRegular text-l mt-3'>
                                Incorrect credentials! Please try again.
                            </Text>
                        </>
                    ) : null}

                    {isServerError ? (
                        <>
                            <Text className='text-text-error font-poppinsRegular text-l mt-3'>
                                Oh no! An error occured please try again later.
                            </Text>
                        </>
                    ) : null}

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