import { View, Text } from 'react-native'
import React from 'react'

const CustomDisplay = ({ Component, componentProps }) => {
    return (
        <View className='aspect-video border-input-focus
        w-full items-center justify-center border-2 p-2 rounded-lg'>
            <Component {...componentProps} />
        </View>
    )
}

export default CustomDisplay