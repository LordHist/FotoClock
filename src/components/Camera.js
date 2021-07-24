import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {StyleSheet, View} from 'react-native';

export default function CameraBarCode() {
  const [barcode, setBarcode] = useState();
  const barcodeRecognized = ({barCodes}) => {
    barCodes.forEach(code => console.warn(code.data));
    setBarcode(barCodes);
  };
  return (
    <RNCamera
      ref={cam => {
        this.camera = cam;
      }}
      captureAudio={false}
      style={styles.btnAlignment}
      type={RNCamera.Constants.Type.back}
      onGoogleVisionBarcodesDetected={barcodeRecognized}
      androidCameraPermissionOptions={{
        title: 'Permiso para usar la cámara',
        message: 'Necesitamos su permiso para utilizar la cámara',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      <View>{barcode}</View>
    </RNCamera>
  );
}
const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});
