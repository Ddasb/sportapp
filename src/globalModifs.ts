import { autoColor, purgeString, romanizeString } from "./utils/utils";

/*
 *  DEMO
 */
export const IsDemo = true;

/*
 *  NAMES
 */
export const TemplateDisplayName = "Template Test";
export const TemplateAppName = purgeString(
  romanizeString(TemplateDisplayName.toLowerCase())
);
export const TemplateOrganisation = purgeString(
  romanizeString(TemplateDisplayName.toUpperCase())
);

/*
 *  BASE CONFIG
 */
export const TemplateExpirationDate = new Date();
export const TemplateIdOrganisation = "57";

/*
 *  COLORS
 */
export const TemplateBackgroundColor = "#123456";
export const TemplateSecondColor = "#FFFFFF";
export const textAutoBackgroundColor = autoColor(TemplateBackgroundColor);
export const textAutoSecondColor = autoColor(TemplateSecondColor);

/*
 *  CREATE ACCOUNT
 */
export const TemplateNameAsk = true;
export const TemplateFirstNameAsk = true;
export const TemplateSexeAsk = true;
export const TemplateDdnAsk = true;
export const TemplateMailAsk = true;
export const TemplateTelAsk = true;
export const TemplateAdressAsk = true;
export const TemplatePostalAsk = true;
export const TemplateCityAsk = true;
export const TemplateCountryAsk = true;
export const TemplateTelVerifAsk = true;
export const TemplateChallengeClub = true;
export const TemplateChallengeFamille = true;
export const TemplateChallengeAutre = true;
export const TemplateChallengeEntreprise = true;
export const TemplateHasAppDonation = false;
export const TemplateIsPaying = false;
export const TemplateChallengeAutreName = "Template Test Autre";
export const TemplateSiteLink = "www.dag-system.com";

/*
 *  IMAGES
 */

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
