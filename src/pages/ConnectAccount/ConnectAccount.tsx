import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ConnectAccountStyles from "./ConnectAccount.styles";
import tradRes from "./../../lang/traduction.json";

import SubPageHeader from "../../components/SubPageHeader/SubPageHeader";
import Footer from "../../components/Footer/Footer";
import { AppContext } from "../../context/AppProvider";

const ConnectAccount = () => {
  const { lang } = useContext(AppContext);
  const [followCode, setFollocode] = useState("");

  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={ConnectAccountStyles.root}>
      <SubPageHeader />
      <View style={ConnectAccountStyles.content}>
        <Text style={ConnectAccountStyles.title}>
          {/* @ts-ignore */}
          {tradRes[lang].utils.alreadyAccount.toUpperCase()}
        </Text>
        <TextInput
          style={ConnectAccountStyles.textInput}
          placeholder="Entrez votre code"
          placeholderTextColor="black"
          value={followCode}
          onChangeText={(val: string) => setFollocode(val)}
          clearButtonMode="always"
        />
        <TouchableOpacity
          onPress={() => console.log("ici")}
          style={ConnectAccountStyles.createButton}
        >
          <Text style={ConnectAccountStyles.createText}>
            {/* @ts-ignore */}
            {tradRes[lang].utils.login.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default ConnectAccount;
