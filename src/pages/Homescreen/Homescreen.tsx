import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Footer from "../../components/Footer/Footer";
import { appVersion, TemplateExpirationDate } from "../../globalModifs";
import { AppContext } from "../../context/AppProvider";
import tradRes from "./../../lang/traduction.json";
import HomescreenStyles from "./Homescreen.styles";

import Logo from "./../../assets/logo.png";

const Homescreen = () => {
  const { lang } = useContext(AppContext);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={HomescreenStyles.root}>
      <View style={HomescreenStyles.content}>
        <View>
          <Image source={Logo} style={HomescreenStyles.appLogo} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <View style={HomescreenStyles.createButton}>
            <Text style={HomescreenStyles.createText}>
              {tradRes[lang].utils.createAccount.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("test")}>
          <View style={HomescreenStyles.connectButton}>
            <Text style={HomescreenStyles.connectText}>
              {tradRes[lang].utils.iConnect.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("test")}>
          <Text style={HomescreenStyles.forgotPassText}>
            {tradRes[lang].utils.forgotMyCode.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <Text style={HomescreenStyles.homescreenText}>
          Version {appVersion}
        </Text>

        <Text style={HomescreenStyles.homescreenText}>
          Expiration le {TemplateExpirationDate.toLocaleDateString()}
        </Text>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Homescreen;
