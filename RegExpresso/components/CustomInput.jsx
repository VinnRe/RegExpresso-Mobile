import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

const CustomInput = ({
    label,
    value,
    onChangeText,
    hasError,
    containerClass = '',
    inputClass = '',
    alignPlaceholder = '',
    labelClass = '',
    secureTextEntry = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            className={`
                relative border-2 rounded-lg
                ${hasError ? 'border-red-500' : isFocused ? 'border-white' : 'border-background-secondary'} 
                ${containerClass}`}
        >
            {/* Floating Label */}
            <View
                pointerEvents='none'
                className={`absolute z-10 left-0 top-0 h-full w-full justify-center ${isFocused || value ? 'top-[-18px] items-start' : alignPlaceholder}`}
            >
                <Text
                    className={`
                        font-poppinsMedium px-4 
                        ${isFocused || value ? 'text-s text-white' : 'text-xl text-input-text'} 
                        ${hasError ? 'text-red-500' : ''} 
                        ${labelClass}
                    `}
                >
                    {label}
                </Text>
            </View>

            {/* Input Field */}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={secureTextEntry}
                className={`
                    bg-input-bg min-h-[60px] min-w-[100%] font-poppinsRegular text-xl text-input-text pl-4 
                    ${inputClass}`}
                placeholderTextColor="transparent"
            />
        </View>
    );
};

export default CustomInput;
