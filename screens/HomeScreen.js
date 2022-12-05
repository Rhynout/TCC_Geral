import  React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView, KeyboardAvoidingView, TextInput, ImageBackground, SafeAreaView, } from 'react-native';
import styles from '../css/Styles';

export default function HomeScreen ({ navigation }) {
    return (
        <View>
        <SafeAreaView style={styles.container8}>
    
            <ImageBackground source={require('../img/background.png')} style={styles.image_background}> 
        
            <Image
                style={styles.image_logo}
                source={require('../img/logo.png')}
            />
            <SafeAreaView style={styles.container0}>
                <ScrollView>
                <Text style={styles.desc}>Delta</Text>
                <Text style={styles.desc2}>Seu aplicativo de monitoramento para irrigações.</Text>
                </ScrollView>
            </SafeAreaView>
            <TouchableOpacity 
            style={styles.btn_iniciar}
            onPress={() =>
                navigation.navigate('Início')
            }
            >
            <Text style={styles.text1}>Iniciar</Text>
            </TouchableOpacity>
        
            <SafeAreaView style={styles.container3}>
            <TouchableOpacity 
            style={styles.btn_creditos}
            onPress={() =>
                navigation.navigate('Informações')
            }
            >
            <Text style={styles.text1}>Informações</Text>
            </TouchableOpacity>
        
            </SafeAreaView>
        
            </ImageBackground> 
    
        </SafeAreaView>
        </View>
    );
};