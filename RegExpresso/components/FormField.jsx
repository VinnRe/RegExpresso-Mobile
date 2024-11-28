import { View } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import { useInputValidation } from '../hooks/useInputValidation'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const { inputValue, hasError, handleInputChange } = useInputValidation();


    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <CustomInput
                label={title}
                value={inputValue}
                onChangeText={handleInputChange}
                hasError={hasError}
                leftProperty='left-4'
            />
        </View>
    )
}

export default FormField