import { TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import { useInputValidation } from '../hooks/useInputValidation'
import { icons } from '../constants'

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    secureTextEntry,
    togglePasswordVisibility,
    showPassword,
    ...props }) => {
    const { inputValue, hasError, handleInputChange } = useInputValidation();

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <CustomInput
                label={title}
                value={value}
                onChangeText={handleChangeText}
                hasError={hasError}
                leftProperty='left-4'
                secureTextEntry={secureTextEntry}
                {...props}
            />

            {title === "Password" && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-8 h-8 absolute top-5 right-2"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}

            {title === "Confirm password" && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-8 h-8 absolute top-5 right-2"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}

        </View>
    )
}

export default FormField