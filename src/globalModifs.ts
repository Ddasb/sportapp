import VersionCheck from "react-native-version-check";

export const TemplateExpirationDate = new Date();

export const TemplateBackgroundColor = "#123456";
export const TemplateSecondColor = "#FFFFFF";

export const textAutoBackgroundColor = autoColor(TemplateBackgroundColor);
export const textAutoSecondColor = autoColor(TemplateSecondColor);

export const TemplateArrayImagesSponsorPath = [
  require("./assets/logo.png"),
  require("./assets/logo.png"),
  require("./assets/logo.png"),
  require("./assets/logo.png")
];
export const TemplateArrayImagesPartenairesPath = [
  require("./assets/logo.png"),
  require("./assets/logo.png"),
  require("./assets/logo.png"),
  require("./assets/logo.png")
];

export const appVersion = VersionCheck.getCurrentVersion();

function autoColor(color: any) {
  if (color == "") {
    return "#000000";
  }

  const max = hexToRgb(color).r + hexToRgb(color).g + hexToRgb(color).b;

  if (max > (3 * 256) / 2) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
}

function hexToRgb(hex: any) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 255, g: 255, b: 255 };
}
