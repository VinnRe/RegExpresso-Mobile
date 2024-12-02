import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomDisplay from '../../components/CustomDisplay'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTable from '../../components/CustomTable'
import { useRegex } from '../context/RegexContext';
import useTuples from '../../hooks/useTuples';

const Tuples = () => {
    const { regexValue, fsmType } = useRegex();
    const { getDFATuples, getNFATuples } = useTuples();
    const [ tuplesData, setTuplesData ] = useState([]);

    useEffect(() => {
        // Fetch tuples data based on FSM type
        const getTuples = async () => {
            let tupleGroup;
            if (fsmType === 'NFA') {
                const tuples = await getNFATuples(regexValue);  // Fetch NFA tuples
                tupleGroup = tuples.tuples;  // Store the tuples data
            } else if (fsmType === 'DFA') {
                const tuples = await getDFATuples(regexValue);  // Fetch DFA tuples
                tupleGroup = tuples.tuples;  // Store the tuples data
            }
            setTuplesData(tupleGroup);  // Update the state with fetched tuples data
            console.log("TUPLESPLES: ", tuplesData)
        };

        if (regexValue) {  // Make sure regexValue is available before fetching
            getTuples();
        }
    }, [regexValue, fsmType]);  // Re-run the effect when regexValue or fsmType changes
    
    return (
        <SafeAreaView className='bg-background-primary min-h-full px-10 justify-center items-center'>
            <CustomDisplay
                title="5 Tuples"
                Component={CustomTable}
                componentProps={{ tuples: tuplesData }}
            />
        </SafeAreaView>
    )
}

export default Tuples