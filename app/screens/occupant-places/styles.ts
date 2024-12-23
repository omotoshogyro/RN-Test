import { StyleSheet } from "react-native";
import { hp, wp } from "../../resources/config";
import { ColorDefinitions } from "../../resources/colors";

export const occupantPlaceScreenStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    pageWrap: {
      flex: 1,
      backgroundColor: colors.white,
    },
    headerWrap: {
      padding: wp(20),
      rowGap: wp(6),
    },
    btnsWrap: {
      flexDirection: "row",
      columnGap: wp(10),
      paddingHorizontal: hp(20),
    },
    listContainerStyle: {
      rowGap: wp(20),
      paddingHorizontal: hp(20),
    },
    columnWrapStyle: {
      gap: wp(20),
    },
  });
