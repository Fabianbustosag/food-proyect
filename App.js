// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Importa tus componentes de pantalla aquí
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ScanScreen from './screens/ScanScreen';
import DashboardScreen from './screens/DashboardScreen';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <FontIcon name="home" size={30} color="#000" />
              ),
            }} 
        />
        <Tab.Screen name="Productos" component={DetailsScreen} 
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="baguette" color="#000" size={30}/>
                    ),
                  }} 
        />
        <Tab.Screen name="ScanScreen" component={ScanScreen} 
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="line-scan" color="#000" size={30}/>
                    ),
                  }} 
        />
        <Tab.Screen name="DashboardScreen" component={DashboardScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chart-bar" color="#000" size={30}/>
                    ),
                  }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
