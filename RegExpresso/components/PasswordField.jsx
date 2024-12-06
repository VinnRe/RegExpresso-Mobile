import React, { useState } from 'react';
import FormField from './FormField';

const PasswordField = ({ title, value, handleChangeText, otherStyles }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <FormField
            title={title}
            value={value}
            handleChangeText={handleChangeText}
            otherStyles={otherStyles}
            secureTextEntry={!showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
            isPasswordField={true}
        />
    );
};

export default PasswordField;
