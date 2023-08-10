import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/Pages/Home'
import Activity from './src/Pages/Activity';
import Inbox from './src/Pages/Inbox'
import Payment from './src/Pages/Payment'
import Account from './src/Pages/Account'
import Food from './src/Pages/food'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './src/Component/bottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name='Food' component={Food} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      initialRouteName="Home"


    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
      <Tab.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
      <Tab.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}


export default class index extends Component {
  render() {
    return (
      <NavigationContainer>

        <HomeStack />

      </NavigationContainer>
    )
  }
}

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MaterialTab.Navigator>
//         <MaterialTab.Screen name="Home" component={Home} />
//       </MaterialTab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App
