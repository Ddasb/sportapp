import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Footer from "../../components/Footer/Footer";
import { TemplateExpirationDate } from "../../globalModifs";
import { AppContext } from "../../context/AppProvider";
import tradRes from "./../../lang/traduction.json";
import HomescreenStyles from "./Homescreen.styles";

import Logo from "./../../assets/logo.png";
import { appVersion } from "../../utils/utils";

const Homescreen = () => {
  const { lang } = useContext(AppContext);

  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={HomescreenStyles.root}>
      <View style={HomescreenStyles.content}>
        <View>
          <Image source={Logo} style={HomescreenStyles.appLogo} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAccount")}
          style={HomescreenStyles.createButton}
        >
          <Text style={HomescreenStyles.createText}>
            {/* @ts-ignore */}
            {tradRes[lang].utils.createAccount.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ConnectAccount")}
          style={HomescreenStyles.connectButton}
        >
          <Text style={HomescreenStyles.connectText}>
            {/* @ts-ignore */}
            {tradRes[lang].utils.iConnect.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("test")}>
          <Text style={HomescreenStyles.forgotPassText}>
            {/* @ts-ignore */}
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
