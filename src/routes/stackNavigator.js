import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const myRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={homePages} />
        <Stack.Screen name="home" component={homePages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myRoute;
