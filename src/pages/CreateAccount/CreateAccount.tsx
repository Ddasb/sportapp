import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import CreateAccountStyles from "./CreateAccount.styles";

import SubPageHeader from "../../components/SubPageHeader/SubPageHeader";
import CustomTextInput from "../../components/CustomInputs/CustomTextInput";
import {
  TemplateFirstNameAsk,
  TemplateMailAsk,
  TemplateNameAsk
} from "../../globalModifs";
import Footer from "../../components/Footer/Footer";

const CreateAccount = () => {
  return (
    <SafeAreaView style={CreateAccountStyles.root}>
      <SubPageHeader />
      <ScrollView style={CreateAccountStyles.content}>
        <CustomTextInput type="name" active={TemplateNameAsk} />
        <CustomTextInput type="firstname" active={TemplateFirstNameAsk} />
        <CustomTextInput type="email" active={TemplateMailAsk} />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default CreateAccount;
