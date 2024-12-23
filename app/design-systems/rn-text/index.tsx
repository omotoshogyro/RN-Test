import { typography } from "../../resources/fonts";
import React from "react";
import { Text } from "react-native";
import { textAlignStyles } from "./styles";
import { AppTextProps } from "./types";
import useColors from "../../hooks/useColors";

/**
 * @param text defaults to ""
 * @param type defaults to body_medium -- Check types.ts for reference
 * @param textTransform defaults to none
 * @param align defaults to auto
 * @param color defaults to primary
 */
const RNText = (props: AppTextProps) => {
  const {
    text = "",
    color = "black",
    type = "body_1_medium",
    align = "auto",
    textTransform = "none",
    style,
    onPress,
    textDecorationLine,
    ...otherTextProps
  } = props;
  const { colors } = useColors();

  const textAlign = textAlignStyles[align];
  const textType = typography[type];
  const textColor = { color: colors[color] };

  const baseTextStyle = {
    ...textType,
    ...textColor,
    ...textAlign,
  };

  return (
    <Text
      onPress={onPress}
      style={[
        baseTextStyle,
        {
          textTransform,
          textDecorationLine,
        },
        style,
      ]}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      {...otherTextProps}
    >
      {text}
    </Text>
  );
};
export default RNText;
