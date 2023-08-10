import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Details, Akun, Splash } from '../Pages';
import { BottomNavigator } from '../Component';
import Register from '../Pages/Akun/Register';
import Beranda from '../Pages/Details';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Beranda} options={{ headerShown: false }} />
      <Tab.Screen name="Favorite" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Details} options={{ headerShown: false }} />
      <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}

const Router = () => {
  return (

    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({

})