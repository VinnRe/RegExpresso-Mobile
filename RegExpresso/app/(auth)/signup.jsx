import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";
import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import FormFooter from '../../components/FormFooter';

const Signup = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    return (
        <SafeAreaView className='bg-background-primary h-full'>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className=" w-full h-full items-center justify-center px-10">
                    <FormHeader title='Signup' />

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
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-3"
                        keyboardType='text'
                    />

                    <FormField
                        title='Confirm password'
                        value={form.confirmPassword}
                        handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                        otherStyles="mt-3"
                        keyboardType='text'
                    />

                    <CustomButton
                        title="Create account"
                        handlePress={() => { router.push('/home') }}
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