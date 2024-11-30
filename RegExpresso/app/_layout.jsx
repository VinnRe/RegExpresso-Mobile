import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import '../global.css'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
      }} />
      <Stack.Screen
        name='(auth)'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='about'
        // options={{
        //   headerShown: false
        // }}
      />
      <Stack.Screen
        name='test'
        // options={{
        //   headerShown: false
        // }}
      />
    </Stack>
  )
}

export default RootLayout
