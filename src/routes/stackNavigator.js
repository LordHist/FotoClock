import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image} from 'react-native';
import homePages from './../pages/home';
import loginPages from './../pages/login';
import timePages from './../pages/time';
import profilePages from './../pages/profile';
import historyPages from './../pages/history';
import {colors, fonts} from './../styles';

const Stack = createStackNavigator();

export default function myRoute() {
  const headerBackground = require('./../assets/images/topBarBg.png');
  const headerLeftComponent = props => (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}>
      <Image
        source={require('./../assets/images/icons/arrow-back.png')}
        resizeMode="contain"
        style={{height: 20}}
      />
    </TouchableOpacity>
  );
  const headerTitleStyle = {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  };
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={loginPages}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={homePages}
        options={{
          headerLeft: headerLeftComponent,
          headerBackground: () => (
            <Image source={headerBackground} resizeMode="contain" />
          ),
          headerTitleStyle: headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="time"
        component={timePages}
        options={{
          headerLeft: headerLeftComponent,
          headerBackground: () => (
            <Image source={headerBackground} resizeMode="contain" />
          ),
          headerTitleStyle: headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="profile"
        component={profilePages}
        options={{
          headerLeft: headerLeftComponent,
          headerBackground: () => (
            <Image source={headerBackground} resizeMode="contain" />
          ),
          headerTitleStyle: headerTitleStyle,
        }}
      />
      <Stack.Screen
        name="history"
        component={historyPages}
        options={{
          headerLeft: headerLeftComponent,
          headerBackground: () => (
            <Image source={headerBackground} resizeMode="contain" />
          ),
          headerTitleStyle: headerTitleStyle,
        }}
      />
    </Stack.Navigator>
  );
}
