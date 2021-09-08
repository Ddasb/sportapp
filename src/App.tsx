import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AppProvider from "./context/AppProvider";
import HomeStackNavigator from "./routes/Routes";

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <AppProvider>
          <NavigationContainer>
            <HomeStackNavigator />
          </NavigationContainer>
        </AppProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
