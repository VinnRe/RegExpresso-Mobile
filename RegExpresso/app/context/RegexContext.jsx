import React, { createContext, useState, useContext } from 'react';

// Create the context
const RegexContext = createContext();

// Provide the context
export const RegexProvider = ({ children }) => {
  const [regexValue, setRegexValue] = useState('');
  const [fsmType, setFsmType] = useState('');

  return (
    <RegexContext.Provider value={{ regexValue, setRegexValue, fsmType, setFsmType }}>
      {children}
    </RegexContext.Provider>
  );
};

// Custom hook for consuming the context
export const useRegex = () => useContext(RegexContext);
