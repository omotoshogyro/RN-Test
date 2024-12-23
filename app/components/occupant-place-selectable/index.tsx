import { View } from "react-native";
import React from "react";
import { RNText } from "../../design-systems";
import { useColors } from "../../hooks";
import { CheckIcon } from "../../assets/svg";
import { occupantPlaceSelectableStyles } from "./styles";
import RNImage from "../../design-systems/rn-image";
import RNTouchable from "../../design-systems/rn-touchable";
import { OccupantPlaceProps } from "./types";

const OccupantPlaceSelectable = ({
  isSelected = false,
  data,
  onPress,
}: OccupantPlaceProps) => {
  const { placeType, placeTypeDesc, placeTypeImg } = data;
  const { colors } = useColors();
  const { placeSelectableWrap, positionedCheck, textsWrap } =
    occupantPlaceSelectableStyles({ colors, isSelected });
  return (
    <RNTouchable onPress={onPress} ui={placeSelectableWrap}>
      <>
        <RNImage uri={placeTypeImg} height={125} bR={12} />
        {isSelected && (
          <View style={positionedCheck}>
            <CheckIcon />
          </View>
        )}
        <View style={textsWrap}>
          <RNText type="body_1_semibold" text={placeType} color="black" />
          <RNText type="body_1_regular" text={placeTypeDesc} color="black60" />
        </View>
      </>
    </RNTouchable>
  );
};

export default OccupantPlaceSelectable;
