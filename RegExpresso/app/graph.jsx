import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import GraphComponent from '../components/GraphComponent';

const MyComponent = () => {
  const [dotScript, setDotScript] = useState('');

  useEffect(() => {
    // Simulate fetching data from API
    const apiResponse = {
        "regEx": "abba*"  
    };
    setDotScript(apiResponse.regEx);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {dotScript ? (
        <GraphComponent regEx={dotScript} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;
