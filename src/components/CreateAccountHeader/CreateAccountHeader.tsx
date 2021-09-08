import React from "react";
import { Image, View } from "react-native";

import CreateAccountHeaderStyles from "./CreateAccountHeader.styles";
import Logo from "./../../assets/logo.png";

const CreateAccountHeader = () => {
  return (
    <View style={CreateAccountHeaderStyles.headerAccount}>
      <View style={CreateAccountHeaderStyles.smallView}></View>
      <View style={CreateAccountHeaderStyles.content}>
        <Image source={Logo} style={CreateAccountHeaderStyles.logoHeader} />
      </View>
      <View style={CreateAccountHeaderStyles.smallView}></View>
    </View>
  );
};

export default CreateAccountHeader;
