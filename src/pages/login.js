import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors, fonts} from './../styles';

const uriImage = require('./../assets/images/background-fotoclock.png');
const uriImageLogo = require('./../assets/images/fotoclock-logo.png');
const loginPage = ({navigation}) => {
  return (
    <ImageBackground style={styles.bgImage} source={uriImage}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText} bold white>
              {' '}
              Usuario{' '}
            </Text>
            <TextInput style={styles.sectionInput} />
            <Text style={styles.sectionTextPass} bold white>
              {' '}
              Contraseña{' '}
            </Text>
            <TextInput style={styles.sectionInput} />
            <TouchableOpacity
              style={styles.sectionTouchLogin}
              onPress={() => navigation.navigate('home')}>
              <Text style={styles.sectionText}> Iniciar Sesion </Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            style={styles.sectionTitleImage}
            source={uriImageLogo}>
            <View style={styles.sectionTitleContainer}>
              <Text style={{}}>
                <Text style={styles.titleBold}> FOTO</Text>
                <Text style={styles.title}>CLOCK</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
        <TouchableOpacity style={styles.textLink}>
          <Text bold white size={14} style={styles.textLinkContainer}>
            fotoclock.mx
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default loginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingStart: 47,
    paddingTop: 46,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sectionContainer: {
    alignItems: 'flex-start',
    paddingStart: 60,
    paddingTop: 37,
    marginTop: 179,
    opacity: 0.71,
    width: 333,
    height: 338,
    borderRadius: 67,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    backgroundColor: 'rgba(118, 160, 233, 255)',
  },
  sectionText: {
    fontFamily: 'Segoe UI',
    fontSize: 24,
    textAlign: 'right',
    color: 'rgba(255, 254, 254, 255)',
  },
  sectionTextPass: {
    fontFamily: 'Segoe UI',
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(255, 254, 254, 255)',
    marginStart: 4,
    marginTop: 20,
  },
  sectionInput: {
    alignItems: 'flex-start',
    paddingStart: 15,
    paddingTop: 30,
    marginTop: 9,
    width: 204,
    height: 30,
    borderRadius: 67,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  sectionTouchLogin: {
    alignItems: 'flex-start',
    paddingStart: 14,
    paddingTop: 11,
    marginStart: 24,
    marginTop: 22,
    width: 166,
    height: 53,
    borderRadius: 26.5,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    backgroundColor: 'rgba(25, 55, 254, 255)',
  },
  textLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  textLinkContainer: {
    flex: 1,
    paddingStart: 126,
    alignItems: 'flex-start',
    color: '#fff',
  },
  sectionTitleImage: {
    marginStart: -309,
    marginTop: -100,
    width: 286,
    height: 286,
  },
  sectionTitleContainer: {
    alignItems: 'flex-start',
    paddingStart: 50,
    paddingTop: 206,
    flex: 1,
  },
  titleBold: {
    fontFamily: 'Segoe UI',
    fontSize: 30,
    fontWeight: fonts.bold,
    color: 'rgba(255, 254, 254, 255)',
  },
  title: {
    fontFamily: 'Segoe UI',
    fontSize: 30,
    color: 'rgba(255, 254, 254, 255)',
  },
});
