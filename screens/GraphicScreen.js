import  React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import styles from '../css/Styles';

export default function GraphicScreen() {
    return (
        <WebView
          source={{
            html: `<center>
                  <br><br><br><br><br><br>
                  <iframe style="width: 440px; 
                  height: 250; transform: scale(2.0); border: none;" src='https://thingspeak.com/channels/1801348/widgets/495644'>
                  </iframe><p></p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                  <iframe style="width: 440px; 
                  height: 255; transform: scale(2.0); border-left: none; border-right: none;" src='https://thingspeak.com/channels/1801348/charts/1?average=10&bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Umidade_Solo&type=line&xaxis=Tempo&yaxis=%25&yaxismax=100&yaxismin=0'>
                  </iframe><p></p><br><br><br><br><br><br><br><br><br><br>
                  <iframe style="width: 440px; 
                  height: 255; transform: scale(2.0); border-left: none; border-right: none;" src='https://thingspeak.com/channels/1801348/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Umidade_Ar&type=line&xaxis=Tempo&yaxis=%25&yaxismax=90&yaxismin=20'>
                  </iframe><p></p><br><br><br><br><br><br><br><br><br><br>
                  <iframe style="width: 440px; 
                  height: 255; transform: scale(2.0); border-left: none; border-right: none;" src='https://thingspeak.com/channels/1801348/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperatura_Ar&type=line&xaxis=Tempo&yaxis=%C2%B0C&yaxismax=50&yaxismin=0'>
                  </iframe>
                  </center>`
          }}
          style={{}}>
        </WebView>
    );
};