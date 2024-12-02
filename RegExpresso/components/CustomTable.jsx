import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CustomTable = ({ tuples }) => {
  if (!tuples) {
    return <Text>Loading tuples...</Text>;  // Or handle error if tuples is undefined
  }

  return (
    <View style={styles.table}>
      {/* Render Q */}
      <Text style={styles.header}>States (Q)</Text>
      <FlatList
        data={tuples.Q}
        keyExtractor={(item, index) => `Q-${index}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item}</Text>
          </View>
        )}
      />

      {/* Render Sigma */}
      <Text style={styles.header}>Alphabet (Σ)</Text>
      <FlatList
        data={tuples.Sigma}
        keyExtractor={(item, index) => `Sigma-${index}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item}</Text>
          </View>
        )}
      />

      {/* Render Delta */}
      <Text style={styles.header}>Transitions (Δ)</Text>
      <FlatList
        data={tuples.Delta}
        keyExtractor={(item, index) => `Delta-${index}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{`(${item[0]}, ${item[1]}) → ${item[2]}`}</Text>
          </View>
        )}
      />

      {/* Render q0 */}
      <Text style={styles.header}>Initial State (q0)</Text>
      <View style={styles.row}>
        <Text style={styles.cell}>{tuples.q0}</Text>
      </View>

      {/* Render F */}
      <Text style={styles.header}>Final States (F)</Text>
      <FlatList
        data={tuples.F}
        keyExtractor={(item, index) => `F-${index}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginVertical: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    fontSize: 14,
    color: '#333',
  },
});

export default CustomTable;
