import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Circle, Line, Text } from 'react-native-svg';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import useFSMData from '../hooks/useFSMData';
import data from './sampleFSM.json'

const FSMVisualization = ({ fsmData = data }) => {
  const scale = useSharedValue(1);
  const pinch = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
    })
    .onEnd(() => {
      scale.value = Math.max(0.5, Math.min(scale.value, 5));
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // Use the custom hook to process FSM data
  const { nodePositions, transitions } = useFSMData(fsmData);

  // Render nodes (states)
  const renderNode = (label, { x, y }, isFinal = false) => (
    <React.Fragment key={label}>
      <Circle cx={x} cy={y} r={20} fill={isFinal ? 'green' : 'blue'} />
      <Text x={x} y={y - 30} fontSize="12" textAnchor="middle" fill="black">
        {label}
      </Text>
    </React.Fragment>
  );

  // Render transitions (edges)
  const renderEdge = ({ from, to, label }) => {
    const fromPos = nodePositions[from];
    const toPos = nodePositions[to];
    return (
      <React.Fragment key={`${from}-${to}`}>
        <Line
          x1={fromPos.x}
          y1={fromPos.y}
          x2={toPos.x}
          y2={toPos.y}
          stroke="black"
          strokeWidth={2}
        />
        <Text
          x={(fromPos.x + toPos.x) / 2}
          y={(fromPos.y + toPos.y) / 2 - 10}
          fontSize="12"
          fill="black"
        >
          {label}
        </Text>
      </React.Fragment>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={pinch}>
        <Animated.View style={animatedStyle}>
          <Svg height="1000" width="800">
            {/* Render Nodes */}
            {Object.entries(nodePositions).map(([state, pos]) =>
              renderNode(state, pos, fsmData.fsm.acceptStates.includes(state.split('q')[1]))
            )}

            {/* Render Transitions */}
            {transitions.map(renderEdge)}
          </Svg>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FSMVisualization;
