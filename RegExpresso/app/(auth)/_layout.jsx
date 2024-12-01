import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='login'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='signup'
                    options={{
                        headerShown: false
                    }}
                />

                <StatusBar style="light" />
            </Stack>
        </>
    )
}

export default AuthLayout