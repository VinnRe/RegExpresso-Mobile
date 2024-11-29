import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

const CustomInput = ({
    label,
    value,
    onChangeText,
    hasError,
    containerClass = '',
    leftProperty,
    inputClass = '',
    labelClass = '',
    secureTextEntry = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className={`
            relative border-2 border-background-secondary rounded-lg 
            ${hasError ? 'border-red-500' : isFocused ? 'border-white' : 'border-background-secondary'} 
            ${containerClass}`}
        >
            <Text
                className={`
                    absolute z-10 font-poppinsMedium
                    ${isFocused || value ? `top-1 left-4 text-s text-white` : `top-[18px] ${leftProperty} text-xl text-input-text `}
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
                secureTextEntry={secureTextEntry}
                className={`bg-input-bg min-h-[60px] min-w-[100%] font-poppinsRegular text-xl text-input-text pl-4${inputClass}`}
                placeholderTextColor="transparent"
            />
        </View>
    );
};

export default CustomInput;
