import { TouchableOpacity } from "react-native";
import React from "react";
import type { RNTouchableProps } from "./types";

/**
 * @description RNTouchable is a component that makes its children clickable.
 *@param {object} [ui={}] - Additional UI styles to apply to the Touchable.

 * @param disabled defaults to false
 */

const RNTouchable = ({
  children,
  onPress,
  ui,
  disabled = false,
}: RNTouchableProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={ui}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default RNTouchable;