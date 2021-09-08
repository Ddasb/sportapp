import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../../components/Header/Header";

import CreateAccountStyles from "./CreateAccount.styles";

import CreateAccountHeader from "../../components/CreateAccountHeader/CreateAccountHeader";

const CreateAccount = () => {
  return (
    <SafeAreaView style={CreateAccountStyles.root}>
      <CreateAccountHeader />
      <View></View>
    </SafeAreaView>
  );
};

export default CreateAccount;
