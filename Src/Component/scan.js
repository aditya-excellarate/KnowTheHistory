import React, {useState, useRef} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanScreen = () => {
  const [scannedData, setScannedData] = useState(false);
  const scannerRef = useRef(null);

  const onSuccess = e => {
    setScannedData(e.data);
  };

  const setScannerRef = ref => {
    scannerRef.current = ref;
  };

  const reActivate = () => {
    scannerRef.current.reactivate();
  };

  console.log('SCANNED DATA: ', scannedData);

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
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ac8e69',
  },
  markerStyle: {borderColor: '#fff', borderRadius: 50},
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

export default ScanScreen;
