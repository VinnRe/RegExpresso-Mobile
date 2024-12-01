import React, { useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { endpoints } from '../constants/endpoints';

const GraphComponent = ({ regEx }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const generateSvg = async (regEx) => {
      try {
        console.log(endpoints.svgNFA)
        const response = await fetch("https://eight-camels-cut.loca.lt/api/parse/svgNFA", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ regEx }),
        });
        const data = await response.json();
        setSvgContent(data.svg);
      } catch (error) {
        console.error('Failed to fetch SVG:', error);
      }
    };

    if (regEx) {
      generateSvg(regEx);
    }
  }, [regEx]);

  if (!svgContent) {
    return null; // Optionally render a loading state
  }

  return (
    <SvgXml xml={svgContent} width="100%" height="100%" />
  );
};

export default GraphComponent;
