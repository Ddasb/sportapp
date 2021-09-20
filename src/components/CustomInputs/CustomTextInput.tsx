import React, { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import { AppContext } from "../../context/AppProvider";
import { TemplateChallengeAutreName } from "../../globalModifs";

import tradRes from "./../../lang/traduction.json";

import CustomTextInputStyles from "./CustomTextInput.styles";

const CustomTextInput = ({
  type,
  active
}: {
  type: string;
  active: boolean;
}) => {
  const { lang, createAccountInfo, setCreateAccountInfo } =
    useContext(AppContext);
  const textTrad =
    // @ts-ignore
    type === "other" ? TemplateChallengeAutreName : tradRes[lang].utils[type];

  return (
    <>
      {active ? (
        <View style={CustomTextInputStyles.textInputView}>
          <TextInput
            mode="outlined"
            label={textTrad}
            placeholderTextColor="black"
            defaultValue={createAccountInfo[type]}
            onChangeText={(val: string) =>
              setCreateAccountInfo({ ...createAccountInfo, [type]: val })
            }
            clearButtonMode="always"
            style={{ backgroundColor: "#ffffff" }}
          />
        </View>
      ) : null}
    </>
  );
};

export default CustomTextInput;
