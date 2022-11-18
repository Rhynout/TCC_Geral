import  React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import styles from '../css/Styles';

export default function ThingSpeakScreen() {
    return (
        <WebView
          source={{
            uri: 'https://thingspeak.com',
          }}
          style={{}}
        />
    );
};