import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "../pages/Homescreen/Homescreen";

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
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
