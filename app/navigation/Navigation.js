import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()
const navigation = useNavigation

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Iniciar sesion' navigation={navigation} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}