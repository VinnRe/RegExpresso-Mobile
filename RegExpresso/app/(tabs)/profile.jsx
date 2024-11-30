import { View, Text, Button } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <CustomButton
            title="About Page"
            handlePress={() => { router.push('/about') }}
            containerStyles="w-full mt-3"
          />
    </View>
  );
};

export default Profile;
