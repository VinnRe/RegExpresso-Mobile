import React from 'react'
import { Stack } from 'expo-router'
import '../global.css'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
      }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Signup" }} />
    </Stack>
  )
}

export default RootLayout
