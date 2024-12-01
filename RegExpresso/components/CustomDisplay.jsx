import { View, Text } from 'react-native'
import React from 'react'
import GraphComponent from './GraphComponent'

const CustomDisplay = ({ title, regEx }) => {
    return (
        <View className='aspect-video shadow-sm border-input-focus
        w-full items-center border-2 p-2 rounded-lg'>
            <Text className='font-poppinsMedium text-text text-xl'>{title}</Text>
            <GraphComponent regEx={regEx} />
        </View>
    )
}

export default CustomDisplay