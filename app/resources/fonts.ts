import { StyleSheet, TextStyle } from "react-native";
import { fs } from "./config";

export type FONT_FAMILY_TYPES = "PassengerSans";

export type FONT_WEIGHT = "Thin" | "Regular" | "Medium" | "Semibold" | "Bold";

export const generateFontFamily = (
  fontFamily: FONT_FAMILY_TYPES,
  weight: FONT_WEIGHT
) => `${fontFamily}${weight}`; //NOTE(Okikiola): I am not hardcoding this incase we might be having more than one font style

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type TypographyProps = {
  size: number;
  family: FONT_FAMILY_TYPES;
  weight: FONT_WEIGHT;
  lineHeight?: number;
  letterSpacePercent?: IntRange<0, 101>; // min 0 & max 100
};

export const generateTypography = ({
  size,
  family,
  weight,
  lineHeight,
  letterSpacePercent = 0,
}: TypographyProps) => {
  return {
    fontFamily: generateFontFamily(family, weight),
    fontSize: fs(size),
    lineHeight: lineHeight ? fs(lineHeight) : undefined,
    letterSpacing: fs(size) * (letterSpacePercent / 100),
  };
};

export type TypographyKeys =
  | "header_1_medium"
  | "body_1_medium"
  | "body_1_regular"
  | "body_1_semibold"
  | "body_1_thin"
  | "body_2_thin";

export type TypographyDefinitions = { [key in TypographyKeys]: TextStyle };

/**  Regular
 * 300 -- 12 -- 16.8
 * 300 -- 14 -- 16.8
 *
 *  Medium
 *  400 -- 10 -- 14
 *
 *  Semibold
 * 500 -- 14 -- 19.6
 * 500 -- 24 -- 28.8
 *
 */

export const typography: TypographyDefinitions = StyleSheet.create({
  header_1_medium: generateTypography({
    size: 24,
    lineHeight: 28.8,
    family: "PassengerSans",
    weight: "Semibold",
  }),

  body_1_thin: generateTypography({
    size: 12,
    lineHeight: 16.8,
    family: "PassengerSans",
    weight: "Thin",
  }),
  body_2_thin: generateTypography({
    size: 14,
    lineHeight: 16.8,
    family: "PassengerSans",
    weight: "Thin",
  }),

  body_1_regular: generateTypography({
    size: 12,
    lineHeight: 14,
    family: "PassengerSans",
    weight: "Regular",
  }),

  body_1_medium: generateTypography({
    size: 14,
    lineHeight: 19.6,
    family: "PassengerSans",
    weight: "Medium",
  }),
  body_1_semibold: generateTypography({
    size: 14,
    lineHeight: 19.6,
    family: "PassengerSans",
    weight: "Semibold",
  }),
});
