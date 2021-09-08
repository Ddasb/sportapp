import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "../pages/Homescreen/Homescreen";
import CreateAccount from "../pages/CreateAccount/CreateAccount";

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Homescreen" component={Homescreen} />
      <HomeStack.Screen name="CreateAccount" component={CreateAccount} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
