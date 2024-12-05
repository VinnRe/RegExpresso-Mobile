import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomDisplay from '../../components/CustomDisplay'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTable from '../../components/CustomTable'
import { useRegex } from '../context/RegexContext';
import useTuples from '../../hooks/useTuples';

const Tuples = () => {
    const { regexValue, fsmType } = useRegex();
    const { getDFATuples, getNFATuples, errorMessage, setErrorMessage } = useTuples();
    const [tuplesData, setTuplesData] = useState([]);

    useEffect(() => {
        try {
            const getTuples = async () => {
                let tupleGroup;
                if (fsmType === 'NFA') {
                    const tuples = await getNFATuples(regexValue);
                    tupleGroup = tuples.tuples;
                } else if (fsmType === 'DFA') {
                    const tuples = await getDFATuples(regexValue);
                    tupleGroup = tuples.tuples;
                }
                setTuplesData(tupleGroup);
            }
    
            if (regexValue) {
                getTuples();
            }
        } catch (error) {
            setErrorMessage("Error Fetching Tuples!")
        }
    }, [regexValue, fsmType]);

    return (
        <SafeAreaView className='bg-background-primary min-h-full'>
            <View className='w-full h-full items-center justify-center p-10'>
                <Text className='font-poppinsBold text-4xl text-text'>
                    The 5 Tuples
                </Text>
                {errorMessage ? (
                    <Text className='text-text-error font-poppinsRegular text-l mt-3'>
                        {errorMessage}
                    </Text>
                ) : null }
                <CustomTable tuples={tuplesData} />
            </View>
        </SafeAreaView>
    )
}

export default Tuples