import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from "../../components/CustomButton";
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, token, handleLogout } = useAuth();

  return (
    <SafeAreaView className='bg-background-primary min-h-full'>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className=" w-full h-full items-center justify-center px-10 ">
          {!token ?
            <Text className='font-poppinsBold text-4xl text-text py-1'>
              Not logged in yet
            </Text> :
            <Text className='font-poppinsBold text-4xl text-text py-1'>
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
              handlePress={() => { router.replace('/login') }}
              containerStyles="w-full mt-3"
            /> :
            <>
              <CustomButton
                title="Change password"
                handlePress={() => { router.push('/changePassword') }}
                containerStyles="w-full mt-3"
              />

              <CustomButton
                title="Logout"
                handlePress={() => { handleLogout(); router.replace('/login'); }}
                containerStyles="w-full mt-3 bg-button-bgRed"
              />
            </>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
