export type ColorKeys =
  | "white"
  | "black"
  | "transparent"
  | "grey1"
  | "grey2"
  | "lightGrey"
  | "black5"
  | "black10"
  | "black40"
  | "black60"
  | "black90";

export type ColorDefinitions = { [key in ColorKeys]: string };

export const LIGHT_COLORS: ColorDefinitions = {
  //Base Colors
  white: "#FFFFFF",
  black: "#141316",
  grey1: "#667085",
  grey2: "#EAECF0",
  lightGrey: "#F9F9F9",
  transparent: "transparent",
  black5: "rgba(0,0,0,0.05)",
  black10: "rgba(0,0,0,0.1)",
  black40: "rgba(0,0,0,0.4)",
  black60: "rgba(0,0,0,0.6)",
  black90: "rgba(0,0,0,0.9)",
} as const;

export const DARK_COLORS: ColorDefinitions = {
  //Base Colors
  white: "#FFFFFF",
  black: "#141316",
  grey1: "#667085",
  grey2: "#EAECF0",
  lightGrey: "#F9F9F9",
  transparent: "transparent",

  // The numbe suffix represent the percentage rate of the opacity on the base color #000
  black5: "rgba(0,0,0,0.05)",
  black10: "rgba(0,0,0,0.1)",
  black40: "rgba(0,0,0,0.4)",
  black60: "rgba(0,0,0,0.6)",
  black90: "rgba(0,0,0,0.9)",
} as const;
