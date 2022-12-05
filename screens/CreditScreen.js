import  React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';

import styles from '../css/Styles';

export default function CreditScreen() {
    return (
        <View style={styles.container2}>
          <SafeAreaView style={styles.container7}>
          <Text style={styles.text4}>Delta, o que é?</Text></SafeAreaView>
          <Text style={styles.desc3}>Delta é um software que busca, por meio de um sistema para irrigação, aplicar conceitos de IoT (Internet das Coisas), explorar plataformas, novas ferramentas e solucionar problemas de gerenciamento de irrigação.</Text>
          <SafeAreaView style={styles.container7}>
          <Text style={styles.text4}>Desenvolvedores</Text></SafeAreaView>

          <Text style={styles.text1}> </Text>

          <SafeAreaView style={styles.container6}>
          <Image
                style={styles.image_profile}
                source={require('../img/d.png')}
            />
            <ScrollView>
            <Text style={styles.text3}>Daniel S. Souza</Text>
            <Text style={styles.text5}>Programação e Design</Text>
            </ScrollView>
          </SafeAreaView>
          <Text style={styles.text1}> </Text>
          <SafeAreaView style={styles.container6}>
          <Image
                style={styles.image_profile}
                source={require('../img/g.png')}
            />
            <ScrollView>
            <Text style={styles.text3}>Gabriel Victorino</Text>
            <Text style={styles.text5}>Programação e Montagem</Text>
            </ScrollView>
          </SafeAreaView>
          <Text style={styles.text1}> </Text>
          <SafeAreaView style={styles.container6}>
          <Image
                style={styles.image_profile}
                source={require('../img/p.png')}
            />
            <ScrollView>
            <Text style={styles.text3}>Pedro L. Sampaio</Text>
            <Text style={styles.text5}>Programação e Desenvolvimento Teórico</Text>
            </ScrollView>
          </SafeAreaView>

        </View>
      );
};