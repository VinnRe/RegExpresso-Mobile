import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomDeleteButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-button-bgRed
            min-h-[60px]
            justify-center
            items-center
            rounded-[10px] 
            ${containerStyles}
            ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text
                className={`text-button-text
                font-poppinsMedium
                text-xl
                ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomDeleteButton