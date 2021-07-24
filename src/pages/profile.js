import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const profilePages = () => {
  return (
    <View style={{padding: 40, flex: 1}}>
      <View>
        <Text>Hola que hace</Text>
      </View>
    </View>
  );
};
export default profilePages;

const styles = StyleSheet.create({
  sectionTouchLogin: {
    alignItems: 'flex-start',
    paddingStart: 14,
    paddingTop: 11,
    marginStart: 24,
    marginTop: 22,
    width: 'auto',
    height: 'auto',
    borderRadius: 26.5,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    backgroundColor: 'rgba(25, 55, 254, 255)',
  },
  sectionText: {
    fontFamily: 'Segoe UI',
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(255, 254, 254, 255)',
  },
});
