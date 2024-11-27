import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>RegExpresso</Text>
      <StatusBar style="auto" />
      <Link href="/about" style={{ color: "blue" }}>Go to About</Link>
      <Link href="/login" style={{ color: "blue" }}>Go to Login</Link>
      <Link href="/signup" style={{ color: "blue" }}>Go to Signup</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
