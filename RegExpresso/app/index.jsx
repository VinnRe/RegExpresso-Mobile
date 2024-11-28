import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>RegExpresso</Text>
      <StatusBar style="auto" />
      <Link href="/about">Go to About</Link>
      <Link href="/login">Go to Login</Link>
      <Link href="/signup">Go to Signup</Link>
    </View>
  );
}

