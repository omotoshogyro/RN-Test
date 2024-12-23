import { StyleSheet } from "react-native";
import type { RNButtonCompStylesProps } from "./types";
import { wp } from "../../resources/config";

export const buttonCompStyles = ({
  colors,
  color,
  disabled,
  outline,
}: RNButtonCompStylesProps) =>
  StyleSheet.create({
    btnWrap: {
      borderWidth: 1,
      paddingVertical: wp(18),
      borderRadius: wp(36),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: outline ? colors?.transparent : colors[color],
      opacity: disabled ? 0.5 : 1,
      borderColor: outline ? colors["black40"] : colors?.transparent,
    },
  });
