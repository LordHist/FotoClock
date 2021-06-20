import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MyRoute from './src/routes/stackNavigator';
import configureStore from './src/redux';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyRoute />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
