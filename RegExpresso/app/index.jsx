import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#e8cdad", "#89695d"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar style="auto" />

        <View className='flex-1 justify-center items-center'>
          <View className='flex justify-center items-center'>
            <Text className='text-text font-poppinsBold text-6xl text-center text-balance'>
              From Regex to Automata, {'\n'}Simplified
            </Text>
            <Text className='text-text font-poppinsMedium text-2xl'>
              Fast. Accurate. Effortless.
            </Text>
          </View>

          <View>
            <Text className='text-text font-poppinsRegular text-pretty'>Transform complex regular expressions into clear, visual finite
              automata.
            </Text>
            <View>
              <TextInput />
              <TouchableOpacity>
                <Text>Convert NFA</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Convert DFA</Text>
              </TouchableOpacity>
            </View>
          </View>


          <Link href='/home'>
            Go to Home
          </Link>
        </View>

        {/* <Link href="/about" className="text-blue-300">Go to About</Link>
        <Link href="/login" className="text-blue-300">Go to Login</Link>
        <Link href="/signup" className="text-blue-300">Go to Signup</Link> */}
      </LinearGradient>
    </View>
  );
}
