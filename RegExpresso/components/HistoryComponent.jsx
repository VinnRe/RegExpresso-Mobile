import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import useRegexOptions from '../hooks/useRegexOptions';
import { useRegex } from '../context/RegexContext';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

const HistoryComponent = ({ token }) => {
  const { fetchRegex, deleteRegex } = useRegexOptions();
  const [allRegex, setAllRegex] = useState([]);
  const { setRegexValue, setFsmType } = useRegex();

  const handleDFASubmit = (regexV) => {
    setRegexValue(regexV);
    setFsmType('DFA');
  };

  const getAllRegex = async () => {
    if (token) {
      try {
        const data = await fetchRegex(token);
        const regexList = data.data.automatons.map((item) => ({
          regEx: item.regEx,
          _id: item._id,
        }));
        setAllRegex(regexList);
      } catch (error) {
        console.error('Error fetching regex history:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRegex(id, token);
      getAllRegex(); // Refresh history after deletion
    } catch (error) {
      console.error('Error deleting regex:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllRegex(); // Fetch data when screen is focused
    }, [token])
  );

  const renderItem = ({ item }) => (
    <View className="px-4 flex-row gap-2">
      <CustomButton
        title={item.regEx}
        handlePress={() => {
          setRegexValue(item.regEx);
          handleDFASubmit(item.regEx);
          router.navigate('/home');
        }}
        containerStyles="w-3/4 bg-accent p-2 rounded-md"
        textStyle="font-poppinsMedium text-white text-lg"
      />
      <CustomButton
        title="Delete"
        handlePress={() => handleDelete(item._id)} // Call handleDelete on button press
        containerStyles="w-1/4 bg-danger p-2 rounded-md bg-button-bgRed"
        textStyle="font-poppinsBold text-white text-sm"
      />
    </View>
  );

  return (
    <>
      {allRegex.length === 0 ? (
        <Text className="font-poppinsMedium text-lg text-text">No RegEx available.</Text>
      ) : (
        <FlatList
          data={allRegex}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ padding: 10, gap: 10 }}
          className="w-full"
        />
      )}
    </>
  );
};

export default HistoryComponent;
