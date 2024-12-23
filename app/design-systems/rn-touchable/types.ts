import { ViewStyle } from "react-native";

export type RNTouchableProps = {
  children: React.ReactElement;
  onPress: () => void;
  ui?: ViewStyle;
  disabled?: boolean;
};
