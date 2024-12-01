import { View, Text } from 'react-native'
import React from 'react'

const CustomDisplay = ({ title }) => {
    return (
        <View className='aspect-video shadow-sm border-input-focus
        w-full items-center border-2 p-2 rounded-lg'>
            <Text className='font-poppinsMedium text-text text-xl'>{title}</Text>
        </View>
    )
}

export default CustomDisplay