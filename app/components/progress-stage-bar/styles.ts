import { StyleSheet } from "react-native";
import { hp, wp } from "../../resources/config";
import { ColorDefinitions } from "../../resources/colors";

export const progressStageBarStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    containerWrap: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: wp(6),
    },
    backArrowBg: {
      height: hp(40),
      width: wp(40),
      backgroundColor: colors.lightGrey,
      borderRadius: wp(40 / 2),
      justifyContent: "center",
      alignItems: "center",
    },
    progressStagesWrap: {
      columnGap: wp(8),
      flexDirection: "row",
      flex: 1,
    },
    eachProgressBar: {
      height: hp(4),
      flex: 1,
      backgroundColor: colors.black5,
      borderRadius: wp(20),
    },
    animatedProgressBar: {
      height: 4,
      backgroundColor: colors.black,
      borderRadius: wp(20),
    },
  });
