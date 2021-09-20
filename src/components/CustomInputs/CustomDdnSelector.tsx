import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import DatePicker from "react-native-date-picker";

import { AppContext } from "../../context/AppProvider";

import tradRes from "./../../lang/traduction.json";

import CustomDdnSelectorStyles from "./CustomDdnSelector.styles";

const CustomDdnSelector = ({
  type,
  active
}: {
  type: string;
  active: boolean;
}) => {
  const { lang, createAccountInfo, setCreateAccountInfo } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  // @ts-ignore
  const textTrad = tradRes[lang].utils[type];

  useEffect(() => {
    setCreateAccountInfo({ ...createAccountInfo, [type]: new Date() });
  }, []);

  return (
    <>
      {active ? (
        <View style={CustomDdnSelectorStyles.textInputView}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={CustomDdnSelectorStyles.ddnText}>
              {`${new Date(createAccountInfo[type]).getDate()} - ${new Date(
                createAccountInfo[type]
              ).getMonth()} - ${new Date(
                createAccountInfo[type]
              ).getFullYear()} `}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={createAccountInfo[type] || new Date()}
            onConfirm={(date) => {
              setOpen(false);
              setCreateAccountInfo({ ...createAccountInfo, [type]: date });
            }}
            onCancel={() => {
              setOpen(false);
            }}
            onDateChange={(e) => console.log(e)}
            mode="date"
            locale={lang}
            title="Choisissez votre date de naissance"
            cancelText="Annuler"
            confirmText="Valider"
          />
        </View>
      ) : null}
    </>
  );
};

export default CustomDdnSelector;
