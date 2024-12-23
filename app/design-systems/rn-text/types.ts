import { ReactNode } from "react";
import { Animated, RegisteredStyle, TextProps } from "react-native";
import { TextStyle } from "react-native/types";
import type { ColorKeys } from "../../resources/colors";
import { TypographyKeys } from "../../resources/fonts";

export type AlignTypes = "left" | "center" | "right" | "auto";
export type TextTranformTypes =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | undefined;

type TextDecorationLine =
  | "none"
  | "underline"
  | "line-through"
  | "underline line-through"
  | undefined;

export type AppTextProps = {
  text?: string | ReactNode;
  style?: TextStyle;
  color?: ColorKeys;
  align?: AlignTypes;
  type?: TypographyKeys;
  children?: React.ReactNode;
  onPress?: () => void;
  textTransform?: TextTranformTypes;
  textDecorationLine?: TextDecorationLine;
} & TextProps;

export type AnimatedTextProps = {
  text?: string | ReactNode;
  style?:
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | RegisteredStyle<TextStyle>
    | Animated.WithAnimatedObject<TextStyle>
    | Animated.WithAnimatedArray<TextStyle>
    | null;
  color?: ColorKeys;
  align?: AlignTypes;
  type?: TypographyKeys;
  children?: React.ReactNode;
  onPress?: () => void;
  textTransform?: TextTranformTypes;
  textDecorationLine?: TextDecorationLine;
};
