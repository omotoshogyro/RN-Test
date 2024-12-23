import { ColorDefinitions } from "../../resources/colors";
import { StyleSheet } from "react-native";
import { hp, wp } from "../../resources/config";

export const rnPlaceTypeSelectableStyles = ({
  colors,
  isSelected,
}: {
  colors: ColorDefinitions;
  isSelected: boolean;
}) =>
  StyleSheet.create({
    placeTypeWrap: {
      paddingVertical: hp(16),
      paddingHorizontal: wp(20),
      borderWidth: isSelected ? 2 : 1,
      borderColor: isSelected ? colors.black : colors.grey2,
      rowGap: wp(20),
      alignSelf: "flex-start",
      borderRadius: wp(12),
      width: "48%",
    },
  });
