import  React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, } from 'react-native';
import styles from '../css/Styles';

export default function APIScreen() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    //Funções e variáveis para atualizar a api automaticamente.
    
    const [counter, setCounter] = React.useState(1);
    React.useEffect(() =>{
      counter > 0 && setTimeout(() => setCounter(counter - 1), 10000);
      counter == 0 && setCounter(() => setCounter(counter + 1));
    },[counter])
  
  
      useEffect(() => {
      fetch('https://api.thingspeak.com/channels/1801348/feeds/last.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [counter]);
  
    return (
        <View style={styles.container2}>
            {isLoading ? <Text>Carregando Dados...</Text> : 
            ( <View style={styles.container2}>
            <SafeAreaView style={styles.container4}>
                <Text style={styles.text2}>Umidade do Solo</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.container5}>
                <Text style={styles.text2}>{data.field1} %</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.container4}>
                <Text style={styles.text2}>Umidade do Ar</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.container5}>
                <Text style={styles.text2}>{data.field2} %</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.container4}>
                <Text style={styles.text2}>Temperatura do Ar</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.container5}>
                <Text style={styles.text2}>{data.field3} °C</Text>
            </SafeAreaView>
            </View>
            )}
        </View>
    );
};