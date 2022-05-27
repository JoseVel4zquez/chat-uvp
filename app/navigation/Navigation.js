import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account/AccountScreen";
import RegisterScreen from "../screens/register/RegisterScreen";

const Stack = createNativeStackNavigator();
const navigation = useNavigation;

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Iniciar sesion"
          navigation={navigation}
          component={AccountScreen}
        />
        <Stack.Screen
          name="registro"
          navigation={navigation}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
