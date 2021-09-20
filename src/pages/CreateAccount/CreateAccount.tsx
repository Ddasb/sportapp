import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";

import CreateAccountStyles from "./CreateAccount.styles";

import SubPageHeader from "../../components/SubPageHeader/SubPageHeader";
import CustomTextInput from "../../components/CustomInputs/CustomTextInput";
import {
  TemplateNameAsk,
  TemplateFirstNameAsk,
  TemplateSexeAsk,
  TemplateDdnAsk,
  TemplateMailAsk,
  TemplateTelAsk,
  TemplateAdressAsk,
  TemplatePostalAsk,
  TemplateCityAsk,
  TemplateCountryAsk,
  TemplateTelVerifAsk,
  TemplateChallengeClub,
  TemplateChallengeFamille,
  TemplateChallengeAutre,
  TemplateChallengeEntreprise,
  API_AUTH,
  TemplateOrganisation
} from "../../globalModifs";
import Footer from "../../components/Footer/Footer";
import CustomSexeSelector from "../../components/CustomInputs/CustomSexeSelector";
import CustomDdnSelector from "../../components/CustomInputs/CustomDdnSelector";
import { create } from "react-test-renderer";
import { AppContext } from "../../context/AppProvider";

const CreateAccount = () => {
  const { createAccountInfo } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const createAccount = async () => {
    const formData = new FormData();

    formData.append("method", "createUtilisateur");
    formData.append("auth", API_AUTH);
    formData.append("organisation", TemplateOrganisation);
  };

  return (
    <SafeAreaView style={CreateAccountStyles.root}>
      <SubPageHeader />
      <ScrollView style={CreateAccountStyles.content}>
        <CustomTextInput type="lastName" active={TemplateNameAsk} />
        <CustomTextInput type="firstName" active={TemplateFirstNameAsk} />
        <CustomTextInput type="email" active={TemplateMailAsk} />
        <CustomSexeSelector type="sexe" active={TemplateSexeAsk} />
        <CustomDdnSelector type="ddn" active={TemplateDdnAsk} />
        <CustomTextInput type="tel" active={TemplateTelAsk} />
        <CustomTextInput type="adress" active={TemplateAdressAsk} />
        <CustomTextInput type="postalCode" active={TemplatePostalAsk} />
        <CustomTextInput type="city" active={TemplateCityAsk} />
        <CustomTextInput type="country" active={TemplateCountryAsk} />
        <CustomTextInput type="clubChallenge" active={TemplateChallengeClub} />
        <CustomTextInput
          type="familyChallenge"
          active={TemplateChallengeFamille}
        />
        <CustomTextInput
          type="businessChallenge"
          active={TemplateChallengeEntreprise}
        />
        <CustomTextInput type="other" active={TemplateChallengeAutre} />

        <TouchableOpacity
          onPress={() => createAccount()}
          style={CreateAccountStyles.createButton}
        >
          <Text style={CreateAccountStyles.createText}>Créer un compte</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default CreateAccount;
