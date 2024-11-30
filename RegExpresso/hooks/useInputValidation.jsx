import { useState } from 'react';

export const useInputValidation = () => {
    const [inputValue, setInputValue] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleInputChange = (text) => {
        setInputValue(text);
        setHasError(!text);
    };

    return { inputValue, hasError, handleInputChange };
};
