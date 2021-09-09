import React from "react";
import { Image, View } from "react-native";

import SubPageHeaderStyles from "./SubPageHeader.styles";
import Logo from "./../../assets/logo.png";

const SubPageHeader = () => {
  return (
    <View style={SubPageHeaderStyles.headerAccount}>
      <View style={SubPageHeaderStyles.smallView}></View>
      <View style={SubPageHeaderStyles.content}>
        <Image source={Logo} style={SubPageHeaderStyles.logoHeader} />
      </View>
      <View style={SubPageHeaderStyles.smallView}></View>
    </View>
  );
};

export default SubPageHeader;
