import { TextStyle, ViewStyle } from "react-native";
import { ColorKeys, ColorDefinitions } from "../../resources/colors";

export type RNButtonProps = {
  btnText?: string;
  style?: ViewStyle;
  color?: ColorKeys;
  disabled?: boolean;
  outline?: boolean;
  stretch?: boolean
  onPress?: () => void;
};

export type RNButtonCompStylesProps = {
  colors: ColorDefinitions;
  color: ColorKeys;
  disabled: boolean;
  outline?: boolean;
};
