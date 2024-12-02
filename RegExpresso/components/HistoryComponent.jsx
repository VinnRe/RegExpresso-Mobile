import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useRegexOptions from '../hooks/useRegexOptions';
import { useRegex } from '../app/context/RegexContext';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import CustomDeleteButton from './CustomDeleteButton';
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
    <View style={styles.itemContainer}>
      <CustomButton
        title={item.regEx}
        handlePress={() => {
          setRegexValue(item.regEx);
          handleDFASubmit(item.regEx);
          router.push('/home');
        }}
        containerStyles="w-full mt-3"
      />
      <CustomDeleteButton
        title="Delete"
        handlePress={() => handleDelete(item._id)} // Call handleDelete on button press
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>RegEx History</Text>
      {allRegex.length === 0 ? (
        <Text>No RegEx available.</Text>
      ) : (
        <FlatList
          data={allRegex}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default HistoryComponent;
