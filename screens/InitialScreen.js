import  React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../css/Styles';

const Stack = createNativeStackNavigator();

export default function InitialScreen( {navigation} ) {
    return (
        <View style={styles.container2}>
            <TouchableOpacity 
            style={styles.btns_inicio}
            onPress={() =>
                navigation.navigate('API')
            }
            >
            <Image
                style={styles.image_btns_inicio}
                source={require('../img/sensor.png')}
            />
            <Text style={styles.text2}>Sensores</Text>
            </TouchableOpacity>
        
            <TouchableOpacity 
            style={styles.btns_inicio}
            onPress={() =>
                navigation.navigate('Gráficos')
            }
            >
            <Image
                style={styles.image_btns_inicio}
                source={require('../img/graficos.png')}
            />
            <Text style={styles.text2}>Gráficos</Text>
            </TouchableOpacity>  
        
            <TouchableOpacity 
            style={styles.btns_inicio}
            onPress={() =>
                navigation.navigate('ThingSpeak')
            }
            >
            <Image
                style={styles.image_btns_inicio}
                source={require('../img/iot.png')}
            />
            <Text style={styles.text2}>Plataforma</Text>
            </TouchableOpacity>
        </View>
    );
};