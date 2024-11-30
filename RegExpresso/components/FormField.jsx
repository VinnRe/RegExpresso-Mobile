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
                value={inputValue}
                onChangeText={handleInputChange}
                hasError={hasError}
                leftProperty='left-4'
                secureTextEntry={secureTextEntry}
                {...props}
            />

            {title === "Password" && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-10 h-10 absolute top-4 right-2"
                    />
                </TouchableOpacity>
            )}

            {title === "Confirm password" && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-10 h-10 absolute top-4 right-2"
                    />
                </TouchableOpacity>
            )}

        </View>
    )
}

export default FormField