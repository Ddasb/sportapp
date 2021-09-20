import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import AppProvider from "./context/AppProvider";
import HomeStackNavigator from "./routes/Routes";
import { TemplateBackgroundColor } from "./globalModifs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: TemplateBackgroundColor
  }
};

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <AppProvider>
          <PaperProvider theme={theme}>
            <NavigationContainer>
              <HomeStackNavigator />
            </NavigationContainer>
          </PaperProvider>
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
