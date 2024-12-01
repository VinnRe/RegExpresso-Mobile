import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
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

  const screenOptions = {
    headerShown: false,
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={screenOptions} />
        <Stack.Screen name="(auth)" options={screenOptions} />
        <Stack.Screen name="(tabs)" options={screenOptions} />
        
        <Stack.Screen
          name='about'
          // options={{
            //   headerShown: false
            // }}
            />
      </Stack>
    </AuthProvider>
  )
}

export default RootLayout
