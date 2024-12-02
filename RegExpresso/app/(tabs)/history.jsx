import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import CustomDisplay from '../../components/CustomDisplay'
import HistoryComponent from '../../components/HistoryComponent'
import { useAuth } from '../context/AuthContext'
import HistoryNotLogged from '../../components/HistoryNotLogged'

const History = () => {
    const { token } = useAuth();

    return (
        <SafeAreaView className='bg-background-primary min-h-full px-10 justify-center items-center'>
            {!token ? 
                <CustomDisplay 
                    title={"History"} 
                    Component={HistoryNotLogged}
                /> 
            :
                <CustomDisplay 
                    title={"History"}
                    Component={HistoryComponent}
                    componentProps={{token}}
                />
            }
        </SafeAreaView>
    )
}

export default History