import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'

const FormHeader = ({ title, textStyles = "" }) => {
    return (
        <View className='relative items-center mt-10'>
            <Image
                source={images.logo}
                className='w-[350px] h-[200px] ml-[-28px] mt-[-60px] mb-[-30px]'
                resizeMode='contain'
            />

            <Text
                className={`text-text 
                        font-poppinsBold 
                        text-center 
                        text-balance pt-2
                        ${textStyles}`}
            >
                {title}
            </Text>
        </View>
    )
}

export default FormHeader