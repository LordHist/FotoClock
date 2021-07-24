import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const homePages = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hola que hace</Text>
      </View>
    </View>
  );
};
export default homePages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});
