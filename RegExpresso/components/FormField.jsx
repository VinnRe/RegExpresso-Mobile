import { TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
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
    isPasswordField = false,
    ...props }) => {

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <CustomInput
                label={title}
                value={value}
                onChangeText={handleChangeText}
                leftProperty='left-4'
                secureTextEntry={secureTextEntry}
                {...props}
            />

            {isPasswordField && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-8 h-8 absolute top-5 right-2"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default FormField