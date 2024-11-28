import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Image
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useInputValidation } from "../hooks/useInputValidation";

export default function App() {
  const { inputValue, hasError, handleInputChange } = useInputValidation();

  return (
    <SafeAreaView className="bg-background-primary h-full px-12">
      <ScrollView
        contentContainerStyle={{ height: '100%' }}
      >
        <View className="w-full items-center h-full">
          <Image
            source={images.logo}
            className='w-[350px] h-[200px] ml-[-28px] my-[-30px]'
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
            containerClass="mt-5"
          />

          <CustomButton
            title="Convert DFA"
            handlePress={() => { }}
            containerStyles="w-full mt-3"
          />

          <CustomButton
            title="Convert NFA"
            handlePress={() => { }}
            containerStyles="w-full mt-3"
          />
        </View>
      </ScrollView>

      <StatusBar style='light' />
    </SafeAreaView >
  );
}
