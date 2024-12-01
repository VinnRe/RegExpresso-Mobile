import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView, } from 'react-native-gesture-handler'
import GraphComponent from '../components/GraphComponent';

const MyComponent = () => {
  const [dotScript, setDotScript] = useState('');

  const pinch = Gesture.Pinch();

  useEffect(() => {
    // Simulate fetching data from API
    const apiResponse = {
        "regEx": "abba*"  
    };
    setDotScript(apiResponse.regEx);
  }, []);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pinch}>
        <Animated.View>
          {dotScript ? (
            <GraphComponent regEx={dotScript} />
          ) : (
            <Text>Loading...</Text>
          )}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default MyComponent;
