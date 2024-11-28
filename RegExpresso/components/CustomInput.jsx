import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

const CustomInput = ({
    label,
    value,
    onChangeText,
    hasError,
    containerClass = '',
    inputClass = '',
    labelClass = '',
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className={`relative border-2 rounded-lg ${hasError ? 'border-red-500' : 'border-none'} ${containerClass}`}>
            <Text
                className={`
                    absolute left-4 z-10
                    ${isFocused || value ? 'top-2 text-s text-white' : 'top-[18px] text-xl text-text'}
                    ${hasError ? 'text-red-500' : ''}
                    ${labelClass}
                `}
            >
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`bg-input-bg min-h-[60px] min-w-[325px] font-poppinsRegular text-xl text-input-text pl-4${inputClass}`}
                placeholderTextColor="transparent"
            />
        </View>
    );
};

export default CustomInput;
