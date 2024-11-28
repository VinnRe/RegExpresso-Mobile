import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { router } from 'expo-router'
import { images } from '../constants'
import CustomButton from './CustomButton'

const FormFooter = ({ textValue, link, linkValue }) => {
    return (
        <View className='relative w-full items-center justify-center'>
            <Text className='text-text font-poppinsRegular text-xl mt-3 relative z-10'>
                {textValue}&nbsp;
                <Link href={link} className='text-text font-poppinsMedium text-lg'>
                    {linkValue}
                </Link>
            </Text>

            <Image
                source={images.divider}
                className='w-full my-[-30px]'
                resizeMode='contain'
            />

            <CustomButton
                title="Continue as Guest"
                handlePress={() => { router.push('/home') }}
                containerStyles="w-full"
                textStyles='text-2xl'
            />
        </View>
    )
}

export default FormFooter