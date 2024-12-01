import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Image
} from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useInputValidation } from "../hooks/useInputValidation";
// import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const { inputValue, hasError, handleInputChange } = useInputValidation();

  return (
    // <AuthProvider>
      <SafeAreaView className="bg-background-primary h-full">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          >
          <View className=" w-full h-full items-center justify-center px-10 ">
            <Image
              source={images.logo}
              className='w-[350px] h-[200px] ml-[-28px] mt-[-60px] mb-[-30px]'
              resizeMode='contain'
              />

            <View className='relative justify-center items-center'>
              <Text
                className='text-text 
                font-poppinsBold text-6xl 
                text-center text-balance pt-2'
                >
                From Regex to Automata, {'\n'}Simplified
              </Text>

              <Text
                className='text-text 
                font-poppinsMedium 
                text-xl'
                >
                Fast. Accurate. Effortless.
              </Text>
            </View>

            <Text
              className='text-text 
              font-poppinsRegular 
              text-pretty 
              text-center
              text-lg
              mt-10'
              >
              Transform complex regular expressions into clear, visual finite
              automata.
            </Text>

            <CustomInput
              label="Enter regular expression"
              value={inputValue}
              onChangeText={handleInputChange}
              hasError={hasError}
              leftProperty='left-24'
              containerClass="mt-5"
              />

            <CustomButton
              title="Convert DFA"
              handlePress={() => { router.push('/home') }}
              containerStyles="w-full mt-3"
              />

            <CustomButton
              title="Convert NFA"
              handlePress={() => { router.push('/home') }}
              containerStyles="w-full mt-3"
              />

            {/* Test Login */}
            <CustomButton
              title="Login"
              handlePress={() => { router.push('/login') }}
              containerStyles="w-full mt-3"
              />
          </View>
        </ScrollView>

        <StatusBar style='light' />
      </SafeAreaView >
    // </AuthProvider>
  );
}
