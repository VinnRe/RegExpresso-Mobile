import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import FormHeader from '../../components/FormHeader';
import PasswordField from '../../components/PasswordField';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

const ChangePassword = () => {
    const [form, setForm] = useState({
        newPassword: '',
        confirmNewPassword: '',
    });

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

                    <CustomButton
                        title="Cancel"
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
