import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MainScreen from "./src/screens/MainScreen";
import SemesterScreen from "./src/screens/SemesterScreen";
import SubjectScreen from "./src/screens/SubjectScreen";
import React from "react";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="SplashScreen">
          <Drawer.Screen name={"SplashScreen"} component={SplashScreen}/>
          <Drawer.Screen name={"LoginScreen"} component={LoginScreen}/>
          <Drawer.Screen name={"SignupScreen"} component={SignupScreen}/>
          <Drawer.Screen name={"MainScreen"} component={MainScreen}/>
          <Drawer.Screen name={"SemesterScreen"} component={SemesterScreen}/>
          <Drawer.Screen name={"SubjectScreen"} component={SubjectScreen}/>
          {/*<Stack.Screen name={"TaskScreen"} component={TaskScreen}/>*/}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
