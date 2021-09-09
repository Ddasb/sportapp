import React, { useContext, useState } from "react";
import { View, TextInput } from "react-native";
import { AppContext } from "../../context/AppProvider";

import tradRes from "./../../lang/traduction.json";

import CustomTextInputStyles from "./CustomTextInput.styles";

const CustomTextInput = ({
  type,
  active
}: {
  type: string;
  active: boolean;
}) => {
  const { lang } = useContext(AppContext);
  // @ts-ignore
  const errorText = tradRes[lang].errors[type];

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {active ? (
        <View style={CustomTextInputStyles.textInputView}>
          <TextInput
            style={CustomTextInputStyles.textInput}
            placeholder={type}
            placeholderTextColor="black"
            value={inputValue}
            onChangeText={(val: string) => setInputValue(val)}
            clearButtonMode="always"
          />
        </View>
      ) : null}
    </>
  );
};

export default CustomTextInput;
