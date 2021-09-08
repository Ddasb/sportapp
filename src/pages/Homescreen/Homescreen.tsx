import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/Footer/Footer";
import { appVersion } from "../../constants";

import HomescreenStyles from "./Homescreen.styles";

const Homescreen = () => {
  return (
    <SafeAreaView style={HomescreenStyles.root}>
      <View style={HomescreenStyles.content}>
        <TouchableOpacity onPress={() => console.log("test")}>
          <View style={HomescreenStyles.createButton}>
            <Text style={HomescreenStyles.createText}>CREER UN COMPTE</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("test")}>
          <View style={HomescreenStyles.connectButton}>
            <Text style={HomescreenStyles.connectText}>JE ME CONNECTE</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("test")}>
          <Text style={HomescreenStyles.forgotPassText}>
            J'AI OUBLIER MON CODE
          </Text>
        </TouchableOpacity>

        <Text style={HomescreenStyles.versionText}>Version {appVersion}</Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Homescreen;
