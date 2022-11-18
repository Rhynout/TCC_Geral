import  React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView, KeyboardAvoidingView, TextInput, ImageBackground, SafeAreaView, } from 'react-native';
import styles from '../css/Styles';

export default function HomeScreen ({ navigation }) {
    return (
        <View>
        <ScrollView>
    
            <ImageBackground source={require('../img/background.png')} style={styles.image_background}> 
        
            <Image
                style={styles.image_logo}
                source={require('../img/logo.png')}
            />
        
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
                navigation.navigate('Créditos')
            }
            >
            <Text style={styles.text1}>Créditos</Text>
            </TouchableOpacity>
        
            <TouchableOpacity 
            style={styles.btn_info}
            onPress={() =>
                navigation.navigate('Home')
            }
            >
            <Text style={styles.text1}>?</Text>
            </TouchableOpacity>
            </SafeAreaView>
        
            </ImageBackground> 
    
        </ScrollView>
        </View>
    );
};