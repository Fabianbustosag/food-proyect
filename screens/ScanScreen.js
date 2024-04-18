import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';


const Stack = createStackNavigator();

function ScanScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>InfoFoodScreen</Text>
    </View>
    //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="Home"
  //       component={Home}
  //       options={{ headerShown: false }}
  //     />
  //     <Stack.Screen name="Profile" component={Profile} />
  //     <Stack.Screen name="Settings" component={Settings} />
  // </Stack.Navigator>
  );
}

export default ScanScreen;