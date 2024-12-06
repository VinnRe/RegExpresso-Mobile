import React from 'react';
import { Dimensions, View } from 'react-native';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

const CustomDisplayZoomable = ({ Component, componentProps }) => {
    // Shared values for panning
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const startX = useSharedValue(0);
    const startY = useSharedValue(0);

    // Pan gesture
    const pan = Gesture.Pan()
        .onStart(() => {
        startX.value = translateX.value;
        startY.value = translateY.value;
        })
        .onUpdate((event) => {
        translateX.value = startX.value + event.translationX;
        translateY.value = startY.value + event.translationY;
        });

    // Animated styles for transformation (panning)
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        ],
  }));

  return (
    <View className="aspect-video border-2 border-input-focus w-full items-center justify-center p-2 rounded-lg overflow-hidden">
      <GestureHandlerRootView className="flex-1 justify-center items-center">
        <GestureDetector gesture={pan}>
          <Animated.View className="aspect-[16/9] p-2 rounded-lg justify-center items-center" style={animatedStyles}>
            <Component {...componentProps} />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
};

export default CustomDisplayZoomable;
