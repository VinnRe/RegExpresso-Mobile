import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useInputValidation } from "../../hooks/useInputValidation";
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomDisplay from '../../components/CustomDisplay';

const Home = () => {
    const { inputValue, hasError, handleInputChange } = useInputValidation();

    return (
        <SafeAreaView className='bg-background-primary min-h-full 
        px-10 justify-center items-center'>
            <CustomDisplay
                title="Finite State Automata"
            />

            <CustomInput
                label="Enter regular expression"
                value={inputValue}
                onChangeText={handleInputChange}
                hasError={hasError}
                leftProperty='left-24'
                containerClass="mt-3"
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
        </SafeAreaView>
    )
}

export default Home