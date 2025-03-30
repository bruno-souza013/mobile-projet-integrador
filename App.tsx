import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen"; 
import HomeScreen from "./src/screens/HomeScreen"; 
import RecodScreen from "./src/screens/RecordScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecordScreen" component={RecodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
