import { StyleSheet } from "react-native";
import { hp, wp } from "../../resources/config";
import { ColorDefinitions } from "../../resources/colors";

export const occupantPlaceSelectableStyles = ({
  isSelected,
  colors,
}: {
  isSelected: boolean;
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    placeSelectableWrap: {
      padding: wp(12),
      alignSelf: "flex-start",
      width: "48%",
      rowGap: wp(12),
      borderRadius: wp(12),
      borderWidth: isSelected ? 2 : 1,
      borderColor: isSelected ? colors.black : colors.black10,
    },
    positionedCheck: {
      position: "absolute",
      top: hp(8),
      right: wp(8),
    },
    textsWrap: {
      rowGap: wp(4),
      minHeight: hp(75),
    },
  });
