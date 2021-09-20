import React, { useContext, useState } from "react";
import { View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AppContext } from "../../context/AppProvider";
import { TemplateChallengeAutreName } from "../../globalModifs";

import tradRes from "./../../lang/traduction.json";

import CustomSexeSelectorStyles from "./CustomSexeSelector.styles";

const CustomSexeSelector = ({
  type,
  active
}: {
  type: string;
  active: boolean;
}) => {
  const { lang, createAccountInfo, setCreateAccountInfo } =
    useContext(AppContext);
  // @ts-ignore
  const textTrad = tradRes[lang].utils[type];

  return (
    <>
      {active ? (
        <View style={CustomSexeSelectorStyles.textInputView}>
          <Picker
            selectedValue={createAccountInfo[type] || "default"}
            onValueChange={(val: string) =>
              setCreateAccountInfo({ ...createAccountInfo, [type]: val })
            }
          >
            <Picker.Item label="Choississez un sexe" value="default" />
            <Picker.Item label="Homme" value="H" />
            <Picker.Item label="Femme" value="F" />
            <Picker.Item label="Autre" value="A" />
          </Picker>
        </View>
      ) : null}
    </>
  );
};

export default CustomSexeSelector;
