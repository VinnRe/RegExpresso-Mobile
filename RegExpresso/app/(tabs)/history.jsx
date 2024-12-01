import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import CustomDisplay from '../../components/CustomDisplay'

const History = () => {
    return (
        <SafeAreaView className='bg-background-primary min-h-full px-10 justify-center items-center'>
            <CustomDisplay
                title="History"
            />
        </SafeAreaView>
    )
}

export default History