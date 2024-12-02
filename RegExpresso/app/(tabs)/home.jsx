import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { useRegex } from '../context/RegexContext';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomDisplay from '../../components/CustomDisplay';
import GraphComponent from '../../components/GraphComponent';
import useRegexOptions from '../../hooks/useRegexOptions';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { regexValue, setRegexValue, fsmType, setFsmType } = useRegex();
  const { saveRegex } = useRegexOptions();
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
    <SafeAreaView className="bg-background-primary min-h-full px-10 justify-center items-center">
      <CustomDisplay
        title="Finite State Automata"
        Component={GraphComponent}
        componentProps={{ regEx: regexValue, type: fsmType }}
      />

      <CustomInput
        label="Enter regular expression"
        value={regexValue} // Bind to regexValue from context
        onChangeText={(text) => setRegexValue(text)} // Update context
        leftProperty="left-24"
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
    </SafeAreaView>
  );
};

export default Home;
