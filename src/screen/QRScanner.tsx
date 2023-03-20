import { NavigationAction, NavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Scenes } from '../utils/Scenes';

function QRScanner({ navigation }: { navigation: any }) {
  console.log('🚀 ~ file: QRScanner.tsx:5 ~ QRScanner ~ QRScanner:');
  // TODO: Implement Scanner here, once we retrieve the Text we go to the scene

  const [scene, setScene] = useState<Scenes>();

  useEffect(() => {
    console.log('Use Effect called on QR Scene');
    console.log('Scene will be changd to DEFAULT scene in 3 seconds');

    setTimeout(() => {
      // FIXME: to set custom scene till QR setup is done, a default timeout is used.
      setScene(Scenes.SIN_ARMOURY);
    }, 1000);
  }, []);

  useEffect(() => {
    switch (scene) {
      case Scenes.DEFAULT_SCENE:
        navigation.navigate(Scenes.DEFAULT_SCENE);
        break;
      case Scenes.SIN_BRITISH_TAKEOVER:
        navigation.navigate(Scenes.SIN_BRITISH_TAKEOVER);
        break;
      case Scenes.SIN_TANAJI_HISTORY:
        navigation.navigate(Scenes.SIN_TANAJI_HISTORY);
        break;
      case Scenes.SIN_ARMOURY:
        navigation.navigate(Scenes.SIN_ARMOURY);
        break;
      default:
        break;
    }
  }, [scene]);

  return <Text>QRScanner:- {scene}</Text>;
}

export default QRScanner;
