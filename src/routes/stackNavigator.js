import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import homePages from './../pages/home';
import loginPages from './../pages/login';
import timePages from './../pages/time';
import profilePages from './../pages/profile';
import historyPages from './../pages/history';
import {colors, fonts} from './../styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabScreen: {
    fontFamily: fonts.primaryBold,
    color: colors.primary,
    fontSize: 18,
    textAlign: 'center',
  },
  stackScreen: {
    fontFamily: fonts.primaryRegular,
    color: colors.primaryGradientEnd,
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
const tabsButton = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={homePages}
        options={{
          tabBarLabel: () => <Text style={styles.tabScreen}>Inicio</Text>,
        }}
      />
      <Tab.Screen
        name="time"
        component={timePages}
        options={{
          tabBarLabel: () => (
            <Text style={styles.tabScreen}>Registrar Horario</Text>
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={historyPages}
        options={{
          tabBarLabel: () => <Text style={styles.tabScreen}>Historial</Text>,
        }}
      />
      <Tab.Screen
        name="profile"
        component={profilePages}
        options={{
          tabBarLabel: () => <Text style={styles.tabScreen}>Perfil</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
export default function myRoute() {
  
  const headerComponent = props => (
    <TouchableOpacity style={styles.header} onPress={props.onPress}>
      <Text style={styles.tabScreen}>Cerrar Sesion</Text>
    </TouchableOpacity>
  );
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
        component={tabsButton}
        options={{
          headerLeft: headerComponent,
          title: 'FotoClock',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
