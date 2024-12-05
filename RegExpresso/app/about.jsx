import { ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import React from 'react';
import { images } from '../constants';
import { icons } from '../constants';

const About = () => {
  return (
    <SafeAreaView className="bg-background-primary h-full">
      <ImageBackground
        source={images.aboutBG}
        resizeMode="cover"
        className="flex-1 items-center p-4"
      >
        <TouchableOpacity className="absolute top-5 left-2" onPress={() => router.back()}>
          <Image
            source={icons.leftArrow}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <Text className="text-DEFAULT text-5xl font-bold mb-10">About Us</Text>
        <Text className="text-DEFAULT text-2xl font-poppinsMedium text-justify mb-10">
          RegExpresso is a web application that converts Regular Expressions to Finite State Machines.
          TripleThreat created this web application for users to visualize their regular expressions in a simple
          and easy to use interface.
        </Text>
        <Text className="text-DEFAULT text-2xl font-poppinsMedium">Copyright © 2024 TripleThreat</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default About;
