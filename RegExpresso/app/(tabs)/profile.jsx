import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from "../../components/CustomButton";
import CustomDeleteButton from '../../components/CustomDeleteButton';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, token, handleLogout } = useAuth();

  return (
    <SafeAreaView className='bg-background-primary min-h-full'>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className=" w-full h-full items-center justify-center px-10 ">
          {!token ?
            <Text className='font-poppinsBold text-4xl text-text'>
              Not logged in yet
            </Text> :
            <Text className='font-poppinsBold text-4xl text-text'>
              Hello there,&nbsp;
              {user}
            </Text>
          }

          <CustomButton
            title="More about us"
            handlePress={() => { router.push('/about') }}
            containerStyles="w-full mt-3"
          />

          {!token ?
            <CustomButton
              title="Login"
              handlePress={() => { router.push('/login') }}
              containerStyles="w-full mt-3"
            /> :
            <CustomDeleteButton
              title="Logout"
              handlePress={() => { handleLogout(); router.push('/login'); }}
              containerStyles="w-full mt-3"
            />
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
