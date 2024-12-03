import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import CustomDisplay from '../../components/CustomDisplay'
import HistoryComponent from '../../components/HistoryComponent'
import { useAuth } from '../context/AuthContext'
import HistoryNotLogged from '../../components/HistoryNotLogged'

const History = () => {
    const { token } = useAuth();

    return (
        <SafeAreaView className='bg-background-primary min-h-full'>
            <View className=" w-full h-full items-center justify-center p-10">
                <Text className="font-poppinsBold text-4xl text-text">RegEx History</Text>
                {!token ?
                    <HistoryNotLogged />
                    :
                    <HistoryComponent token={token} />
                }
            </View>
        </SafeAreaView>
    )
}

export default History