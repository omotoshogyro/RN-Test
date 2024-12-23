import React from "react";
import { TouchableOpacity } from "react-native";
import type { RNButtonProps } from "./types";
import { buttonCompStyles } from "./styles";
import { useColors } from "../../hooks";
import RNText from "../rn-text";

/**
 * @param text defaults to EMPTY_STRING
 * @param color defaults to primary -- The background color of the button
 * @param disabled defaults to false 
 * @param outline defaults to false -- This toggle the type of button from outline to solid
 */

const RNButton = (props: RNButtonProps) => {
  const {
    btnText = "",
    color = "black",
    style,
    disabled = false,
    outline = false,
    onPress,
  } = props;
  const { colors } = useColors();
  const styles = buttonCompStyles({
    colors,
    color,
    disabled,
    outline,
  });
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      style={[styles.btnWrap, style]}
      onPress={onPress}
    >
      <RNText
        text={btnText}
        color={outline ? "black" : "white"}
        type="body_1_semibold"
      />
    </TouchableOpacity>
  );
};
export default RNButton;
