import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QRScanner from '../screen/QRScanner';
import { Scenes } from '../utils/Scenes';
import Image360 from '../screen/Home/Image360';
import Armoury from '../screen/Scenes/Sinhagad/Armoury';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QR" component={QRScanner} />
        <Stack.Screen name={Scenes.DEFAULT_SCENE} component={Image360} />
        <Stack.Screen name={Scenes.SIN_ARMOURY} component={Armoury} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
