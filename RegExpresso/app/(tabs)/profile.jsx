import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from "../../components/CustomButton";
import CustomDeleteButton from '../../components/CustomDeleteButton';
import { useAuth, getUserData } from '../context/AuthContext';

const Profile = () => {
  const { user, token, handleLogout } = useAuth();

  console.log(user)

  return (
    <SafeAreaView className='bg-background-primary min-h-full px-10 justify-center items-center'>
      {!token ? <Text>
            Not Logged In
        </Text> : <Text>
            {user}
        </Text>
      }
      <CustomButton
        title="About Page"
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
      
    </SafeAreaView>
  );
};

export default Profile;
