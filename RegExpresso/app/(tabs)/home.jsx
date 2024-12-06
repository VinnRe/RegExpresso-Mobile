import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from 'react';
import { useRegex } from '../../context/RegexContext';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomDisplayZoomable from '../../components/CustomDisplayZoomable';
import GraphComponent from '../../components/GraphComponent';
import useRegexOptions from '../../hooks/useRegexOptions';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { regexValue, setRegexValue, fsmType, setFsmType } = useRegex();
  const { saveRegex, errorMessageSave, setErrorMessageSave } = useRegexOptions();
  const { token } = useAuth();

  const handleNFASubmit = () => {
    setFsmType('NFA');
    saveRegex(regexValue, token);
  };

  const handleDFASubmit = () => {
    setFsmType('DFA');
    saveRegex(regexValue, token);
  };

  return (
    <SafeAreaView className="bg-background-primary min-h-full">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className='w-full h-full items-center justify-center px-10'>
          <Text className='font-poppinsBold text-3xl text-text'>
            Finite State Automata
          </Text>

          <View className='border-2 rounded-xl mt-4 mb-[-24px] aspect-video w-full overflow-hidden'>
            <CustomDisplayZoomable>
              <GraphComponent
                regEx={regexValue}
                type={fsmType}
              />
            </CustomDisplayZoomable>
          </View>

          {errorMessageSave ? (
            <Text className='text-text-error font-poppinsMedium text-lg mt-3'>
              {errorMessageSave}
            </Text>
          ) : (
            <Text className='text-text-error font-poppinsMedium text-lg mt-3'>

            </Text>
          )}

          <CustomInput
            label="Enter regular expression"
            value={regexValue}
            onChangeText={(text) => setRegexValue(text)}
            alignPlaceholder='items-center'
            containerClass="mt-3"
          />

          <CustomButton
            title="Convert DFA"
            handlePress={() => handleDFASubmit()}
            containerStyles="w-full mt-3"
          />

          <CustomButton
            title="Convert NFA"
            handlePress={() => handleNFASubmit()}
            containerStyles="w-full mt-3"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
