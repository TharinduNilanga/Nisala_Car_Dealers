import { View, Text } from 'react-native'
import React from 'react'
import Login from './Screens/Login'
import Flex from './Screens/flex'
import LoginScreen from './Screens/LoginScreen'
import SignUp from './Screens/SignUp'
import DashBoard from './Screens/DashBoard'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCar from './Screens/AddCar'
import view from './Screens/view'

const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="flex" options={{"headerShown":false}} component={Flex} />
        <Stack.Screen name="LoginScreen"   component={LoginScreen} />
        <Stack.Screen name="SignUp"   component={SignUp} />
        <Stack.Screen name="DashBoard"   component={DashBoard} />
        <Stack.Screen name="AddCar"   component={AddCar} />
      </Stack.Navigator>
 </NavigationContainer>
    
  )
}
