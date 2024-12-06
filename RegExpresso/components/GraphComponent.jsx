import React, { useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { Text } from 'react-native';
import { endpoints } from '../constants/endpoints';
import useRegexOptions from '../hooks/useRegexOptions';

const GraphComponent = ({ regEx, type }) => {
  const [svgContent, setSvgContent] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (type === 'NFA') {
      const generateSvg = async (regEx) => {
        try {
          if (await regEx) {
            console.log("REGEX IN")
          }
          console.log(endpoints.svgNFA)
          const response = await fetch(endpoints.svgNFA, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ regEx }),
          });

          setErrorMessage("")

          if (!response.ok) {
            setErrorMessage("Error Visualizing Regular Expression.");
            return;
          }
          
          const data = await response.json();
          setSvgContent(data.svg);
        } catch (error) {
          setErrorMessage("Failed to fetch SVG, please try again later.")
          console.error('Failed to fetch SVG:', error);
        }
      };

      if (regEx) {
        generateSvg(regEx);
      }
    } else if (type === 'DFA') {
      const generateSvg = async (regEx) => {
        try {
          if (await regEx) {
            console.log("REGEX IN")
          }
          console.log(endpoints.svgDFA)
          const response = await fetch(endpoints.svgDFA, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ regEx }),
          });
          setErrorMessage("")

          if (!response.ok) {
            setErrorMessage("Error Visualizing Regular Expression.");
            return;
          }

          const data = await response.json();
          setSvgContent(data.svg);
        } catch (error) {
          setErrorMessage("Failed to fetch SVG, please try again later.")
          console.error('Failed to fetch SVG:', error);
        }
      };

      if (regEx) {
        generateSvg(regEx);
      }
    } else {
      return
    }

  }, [regEx, type]);

  if (!svgContent) {
    return null;
  }

  return (
    <>
      {errorMessage ? (
        <>  
          <Text className='text-text-error font-poppinsMedium text-lg mt-3'>
            {errorMessage}
          </Text>
        </>
      ) : (
        <SvgXml xml={svgContent} width="100%" height="100%" style={{ marginLeft: -40, zIndex: -1 }} />
      )}
    </>
    
  );
};

export default GraphComponent;