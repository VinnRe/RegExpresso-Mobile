import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import GraphComponent from '../components/GraphComponent';

const MyComponent = () => {
  const [dotScript, setDotScript] = useState('');

  useEffect(() => {
    // Simulate fetching data from API
    const apiResponse = {
      message: "FSM visualized successfully",
      dotScript: `digraph finite_state_machine { rankdir = LR; node [shape = circle, color="#e8cdad", fontcolor="#e8cdad"]; 0; node [shape = doublecircle, color="#e8cdad", fontcolor="#e8cdad"]; 5; node [shape = plaintext];  "" -> 0 [label="start", color="#e8cdad", fontcolor="#e8cdad"];  0 -> 1 [label="a", color="#e8cdad", fontcolor="#e8cdad"]; 1 -> 2 [label="b", color="#e8cdad", fontcolor="#e8cdad"]; }`
    };
    setDotScript(apiResponse.dotScript);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {dotScript ? (
        <GraphComponent dotScript={dotScript} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;
