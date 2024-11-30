import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <CustomButton
                title="GRAPH"
                handlePress={() => { router.push('/graph') }}
                containerStyles="w-full mt-3"
            />
        </View>
    )
}

export default Home