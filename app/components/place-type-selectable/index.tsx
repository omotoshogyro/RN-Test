import { View } from "react-native";
import React from "react";
import { RNText } from "../../design-systems";
import type { PlaceAndIconProps } from "./types";
import { useColors } from "../../hooks";
import { rnPlaceTypeSelectableStyles } from "./styles";
import RNTouchable from "../../design-systems/rn-touchable";

const PlaceTypeSelectable = ({
  Icon,
  type,
  isSelected,
  onPress,
}: PlaceAndIconProps) => {
  const { colors } = useColors();
  const { placeTypeWrap } = rnPlaceTypeSelectableStyles({ colors, isSelected });
  return (
    <RNTouchable onPress={onPress} ui={placeTypeWrap}>
      <>
        <Icon />
        <RNText
          type={isSelected ? "body_1_semibold" : "body_1_regular"}
          text={type}
        />
      </>
    </RNTouchable>
  );
};

export default PlaceTypeSelectable;
