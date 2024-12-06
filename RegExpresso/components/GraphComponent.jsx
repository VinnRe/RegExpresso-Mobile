import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { endpoints } from '../constants/endpoints';

const GraphComponent = ({ regEx, type }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const generateSvg = async (url, regEx) => {
      try {
        if (!regEx) {
          setErrorMessage("");
          return;
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ regEx }),
        });

        if (!response.ok) {
          setErrorMessage("Error visualizing regular expression. Please try again.");
        } else {
          setErrorMessage("")
        }

        const data = await response.json();
        setSvgContent(data.svg);
      } catch (error) {
        setErrorMessage("Failed to fetch SVG, please try again later.");
      }
    };

    const endpoint = type === 'NFA' ? endpoints.svgNFA : endpoints.svgDFA;
    if (regEx) generateSvg(endpoint, regEx);
  }, [regEx, type]);

  if (errorMessage) {
    return (
      <Text className="text-text-error font-poppinsMedium text-lg mt-3">
        {errorMessage}
      </Text>
    );
  }

  if (!svgContent) return null;

  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <SvgXml xml={svgContent} width="100%" height="100%" />
    </View>
  );
};

export default GraphComponent;
