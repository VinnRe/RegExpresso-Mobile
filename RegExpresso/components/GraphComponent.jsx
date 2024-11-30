import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
import logog from '../assets/logo/header_regex_only.svg'

const GraphComponent = ({ dotScript }) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Graph Visualization</title>
            <script src="https://d3js.org/d3.v5.min.js"></script>
            <script src="https://unpkg.com/d3-graphviz@2.0.0/build/d3-graphviz.min.js"></script>
        </head>
        <body>
            <img src='../assets/logo/header_regex_only.svg' alt="My SVG" />
        </body>
        </html>
        `;


    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={{ flex: 1 }}
            onMessage={(event) => console.log("WebView Log:", event.nativeEvent.data)}
        />
    );
  };
  
export default GraphComponent;