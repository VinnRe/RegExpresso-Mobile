import { View, Text } from 'react-native'
import React from 'react'
import CustomDisplay from '../../components/CustomDisplay'
import { SafeAreaView } from 'react-native-safe-area-context';


const Tuples = () => {
    return (
        <SafeAreaView className='bg-background-primary min-h-full px-10 justify-center items-center'>
            <CustomDisplay
                title="5 Tuples"
            />
        </SafeAreaView>
    )
}

export default Tuples