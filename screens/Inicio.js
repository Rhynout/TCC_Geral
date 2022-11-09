import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#30c2e4',
    marginTop: 10,
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
  text1: {
    fontSize: 25,
    color: '#fff',
  },
  textsub: {
    justifyContent: 'flex-end',
    fontSize: 13,
    paddingBottom: 50,
  }
});
