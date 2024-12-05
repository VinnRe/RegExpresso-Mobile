import { Stack } from 'expo-router';

const screenOptions = {
    headerShown: false,
}

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='login' options={screenOptions} />
            <Stack.Screen name='signup' options={screenOptions} />
            <Stack.Screen name='changePassword' options={screenOptions} />
        </Stack>
    )
}

export default AuthLayout