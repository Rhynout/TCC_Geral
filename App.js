import  React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import APIScreen from './screens/APIScreen';
import ThingSpeakScreen from './screens/ThingSpeakScreen';
import CreditScreen from './screens/CreditScreen';
import GraphicScreen from './screens/GraphicScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ 
              headerTitle: '', 
              headerTintColor: '#fff', 
              headerTransparent: true,
              statusBarTranslucent: true,
              navigationBarHidden: true,
            }}
          />
          <Stack.Screen 
            name="Início" 
            component={InitialScreen}
            options={{
              headerTintColor: '#fff', 
              statusBarColor: '#09A9E6', 
              navigationBarColor: '#fff', 
              headerStyle: {
                backgroundColor: '#09A9E6',
              }
            }}
          />
          <Stack.Screen
            name="API"
            component={APIScreen}
            options={{ 
              headerTitle: 'API', 
              headerTintColor: '#fff', 
              statusBarColor: '#09A9E6', 
              navigationBarColor: '#fff', 
              headerStyle: {
                backgroundColor: '#09A9E6',
              }
            }}
          />
          <Stack.Screen
            name="Gráficos"
            component={GraphicScreen}
            options={{
              headerTintColor: '#fff', 
              statusBarColor: '#09A9E6', 
              navigationBarColor: '#fff', 
              headerStyle: {
                backgroundColor: '#09A9E6',
              }
            }}
          />
          <Stack.Screen
            name="ThingSpeak"
            component={ThingSpeakScreen}
            options={{
              headerTintColor: '#fff', 
              statusBarColor: '#2f7eb2', 
              navigationBarColor: '#fff', 
              headerStyle: {
                backgroundColor: '#2f7eb2',
              }
            }}
          />
          <Stack.Screen 
            name="Informações" 
            component={CreditScreen} 
            options={{

              headerTintColor: '#fff', 
              statusBarColor: '#09A9E6', 
              navigationBarColor: '#fff', 
              headerStyle: {
                backgroundColor: '#09A9E6',
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}