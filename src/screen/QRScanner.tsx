import { NavigationAction, NavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Scenes } from '../utils/Scenes';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function QRScanner({ navigation }: { navigation: any }) {
  const [scene, setScene] = useState<Scenes>();
  const scannerRef = useRef(null);
  console.log('🚀 ~ file: QRScanner.tsx:5 ~ QRScanner ~ QRScanner: ', scene);
  const onSuccess = (e: any) => {
    setScene(e.data);
  };

  const setScannerRef = (ref: any) => {
    scannerRef.current = ref;
  };

  const reActivate = () => {
    scannerRef.current.reactivate();
  };

  // useEffect(() => {
  //   console.log('Use Effect called on QR Scene');
  //   console.log('Scene will be changd to DEFAULT scene in 3 seconds');

  //   setTimeout(() => {
  //     // FIXME: to set custom scene till QR setup is done, a default timeout is used.
  //     setScene(Scenes.SIN_ARMOURY);
  //   }, 1000);
  // }, []);

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

  return (
    <View style={styles.root}>
      <QRCodeScanner
        showMarker={true}
        markerStyle={styles.markerStyle}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        ref={setScannerRef}
        cameraContainerStyle={styles.cameraContainerStyle}
        cameraStyle={styles.cameraStyle}
        topContent={
          <Text style={styles.centerText}>
            Please move your camera {'\n'} over the QR Code
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={reActivate}>
            <Text style={styles.buttonText}>Reactivate</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ac8e69',
  },
  markerStyle: {
    borderColor: '#fff',
    borderRadius: 50,
  },
  cameraContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraStyle: {
    width: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
  buttonText: {
    fontSize: 21,
    color: '#2e1503',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRScanner;
