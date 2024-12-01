import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import FormFooter from '../../components/FormFooter';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleLogin = () => {
        if (form.username && form.password) {
            // Add login logic here (e.g., API call for authentication)
            router.push('/home');
        } else {
            alert('Please fill in all fields');
        }
    };

    const [isSubmitting, setisSubmitting] = useState(false)

    return (
        <SafeAreaView className='bg-background-primary h-full'>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className=" w-full h-full items-center justify-center px-10 mt-[-40px]">
                    <FormHeader title='Login' />

                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-3 flex-row"
                        secureTextEntry={!showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        showPassword={showPassword}
                    />

                    <CustomButton
                        title="Login"
                        handlePress={handleLogin}
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