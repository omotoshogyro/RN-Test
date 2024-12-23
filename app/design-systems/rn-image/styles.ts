import { StyleSheet } from "react-native";
import { hp, wp } from "../../resources/config";

export const rnImageStyles = ({ height, bR }: { height: number; bR: number }) =>
  StyleSheet.create({
    imageViewWrap: {
      height: hp(height),
      width: "100%",
    },
    imageStyle: {
      width: "100%",
      height: "100%",
      borderRadius: wp(bR),
      borderWidth: 0,
    },
  });
