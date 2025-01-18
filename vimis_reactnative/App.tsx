import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import React from "react";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="SplashScreen">
          <Tab.Screen name={"SplashScreen"} component={SplashScreen}/>
          <Tab.Screen name={"LoginScreen"} component={LoginScreen}/>
          <Tab.Screen name={"SignupScreen"} component={SignupScreen}/>
          {/*<Stack.Screen name={"MainScreen"} component={MainScreen}/>*/}
          {/*<Stack.Screen name={"SubjectScreen"} component={SubjectScreen}/>*/}
          {/*<Stack.Screen name={"TaskScreen"} component={TaskScreen}/>*/}
        </Tab.Navigator>
      </NavigationContainer>
  );
}
