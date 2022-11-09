import { StatusBar } from 'expo-status-bar';
import  React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ScrollView>

{/*-----------------------------------------------------------------*/}

    <Text style={styles.text1}> </Text>

    <Image
        style={styles.tinyLogo}
        source={require('./img/title.png')}
    />

    <Text style={styles.textsub}>Created by DGP</Text>

    <Text style={styles.text1}> </Text>

{/*-----------------------------------------------------------------*/}

    <TouchableOpacity 
      style={styles.button1}
      onPress={() =>
        navigation.navigate('Login')
      }
    >
    <Text style={styles.text1}>Entrar</Text>
    </TouchableOpacity>

{/*-----------------------------------------------------------------*/}

    <TouchableOpacity 
      style={styles.button1}
      onPress={() =>
        navigation.navigate('Créditos')
      }
    >
    <Text style={styles.text1}>Créditos</Text>
    </TouchableOpacity>

{/*-----------------------------------------------------------------*/}

    <TouchableOpacity 
      style={styles.button1}
      onPress={() =>
        navigation.navigate('ThingSpeak')
      }
    >
    <Text style={styles.text1}>ThingSpeak</Text>
    </TouchableOpacity>

{/*-----------------------------------------------------------------*/}

<TouchableOpacity 
      style={styles.button1}
      onPress={() =>
        navigation.navigate('Gráficos')
      }
    >
    <Text style={styles.text1}>Gráficos</Text>
    </TouchableOpacity>

{/*-----------------------------------------------------------------*/}

    </ScrollView>
    </View>
  );
};

{/*-------------------------------------------TELA-01-------------------------------------------*/}

const ProfileScreen = ({ navigation, route, }) => {
  
  //const [display, setDisplay]=useState('none');
  
  return (

    <KeyboardAvoidingView style={styles.container}>

      <View>
        <Image
          style={styles.Logo}
          source={require('./img/logo.png')}
        />
      </View>
      
      {/* <View>
        <Text style={styles.textloginmsg()}>Usuário ou Senha Inválidos!</Text>
      </View> */}

      <View>
        <TextInput style={styles.caixa} placeholder='Usuário' />
        <TextInput style={styles.caixa} placeholder='Senha' secureTextEntry={true}/>
        <TouchableOpacity 
          style={styles.button1} /*onPress={()=>setDisplay('flex')}*/> 
          <Text style={styles.text1}>Logar</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

{/*-------------------------------------------TELA-02-------------------------------------------*/}

const Creditos = ({ navigation, route, }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> </Text>
      <Text>Criado por DGP</Text>
      <Text style={styles.text1}> </Text>
      <Text>Texto de descrição</Text>
      <Text>Texto de descrição</Text>
      <Text>Texto de descrição</Text>
      <Text>Texto de descrição</Text>
    </View>
  );
};

{/*-------------------------------------------TELA-03-------------------------------------------*/}

const WebNav = ({ navigation, route, }) => {

  return (
      <WebView
        source={{
          uri: 'https://thingspeak.com'
        }}
        style={{}}
      />
  );
};

{/*-------------------------------------------TELA-04-------------------------------------------*/}

const Graficos = ({ navigation, route, }) => {

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

{/*--------------------------------------------------------------------------------------*/}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            
            headerTitle: 'Delta', 
            headerTintColor: '#fff', 
            statusBarColor: '#189cb9', 
            navigationBarColor: '#fff', 
            headerStyle: {
              backgroundColor: '#30c2e4',
            }
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={ProfileScreen}
          options={{

            headerTintColor: '#fff', 
            statusBarColor: '#189cb9', 
            navigationBarColor: '#fff', 
            headerStyle: {
              backgroundColor: '#30c2e4',
            }
          }}
        />
        <Stack.Screen 
          name="Créditos" 
          component={Creditos} 
          options={{

            headerTintColor: '#fff', 
            statusBarColor: '#189cb9', 
            navigationBarColor: '#fff', 
            headerStyle: {
              backgroundColor: '#30c2e4',
            }
          }}
        />
        <Stack.Screen
          name="ThingSpeak"
          component={WebNav}
          options={{
            headerTintColor: '#fff', 
            statusBarColor: '#189cb9', 
            navigationBarColor: '#fff', 
            headerStyle: {
              backgroundColor: '#30c2e4',
            }
          }}
        />
        <Stack.Screen
          name="Gráficos"
          component={Graficos}
          options={{
            headerTintColor: '#fff', 
            statusBarColor: '#189cb9', 
            navigationBarColor: '#fff', 
            headerStyle: {
              backgroundColor: '#30c2e4',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{/*--------------------------------------------------------------------------------------*/}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#30c2e4',
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 310,
    height: 210,
  },
  Logo: {
    width: 210,
    height: 210,
  },
  text1: {
    fontSize: 25,
    color: '#fff',
  },
  textsub: {
    fontSize: 13,
    paddingBottom: 50,
    alignSelf: 'center',
  },
  textloginmsg: (text='none')=>({
    color: 'red',
    display: text,
  }),
  caixa: {
    backgroundColor: '#D4F5FF',
    width: 300,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 3,
  },
});
