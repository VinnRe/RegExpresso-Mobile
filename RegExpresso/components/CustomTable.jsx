import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const CustomTable = ({ tuples }) => {
  if (!tuples) {
    return <Text>Loading tuples...</Text>; // Or handle error if tuples is undefined
  }

  // Create a flat data array with section identifiers
  const data = [
    { type: 'header', title: 'States (Q)', items: tuples.Q },
    { type: 'header', title: 'Alphabet (Σ)', items: tuples.Sigma },
    { type: 'header', title: 'Transitions (Δ)', items: tuples.Delta },
    { type: 'item', title: 'Initial State (q0)', value: tuples.q0 },
    { type: 'header', title: 'Final States (F)', items: tuples.F },
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return (
        <View className="gap-3 bg-button-bg p-4 rounded-lg flex-row justify-between items-center">
          <Text className="font-poppinsBold text-white text-xl">{item.title}</Text>
          <FlatList
            data={item.items}
            keyExtractor={(subItem, index) => `${item.title}-${index}`}
            renderItem={({ item: subItem }) => (
              <View className="flex-row justify-end">
                <Text className="font-poppinsMedium text-white text-xl">
                  {item.title === 'Transitions (Δ)'
                    ? `(${subItem[0]}, ${subItem[1]}) → ${subItem[2]}`
                    : subItem}
                </Text>
              </View>
            )}
          />
        </View>
      );
    } else if (item.type === 'item') {
      return (
        <View className="min-w-full flex-row justify-between bg-button-bg items-center p-4 rounded-lg">
          <Text className="font-poppinsBold text-white text-xl">{item.title}</Text>
          <Text className="font-poppinsMedium text-white text-xl">{item.value}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `section-${index}`}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 10, gap: 10 }}
      style={{ width: '100%' }}
    />
  );
};

export default CustomTable;
