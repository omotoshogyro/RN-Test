import { View, Text } from "react-native";
import React from "react";
import { Image as ExpoImage } from "expo-image";
import { RNImageProps } from "./types";
import { rnImageStyles } from "./styles";
/**
 * @description RNImage is a component that displays an image with some extra props functionality.
 
 * @param {string} uri - The URI of the image to be displayed.
 * @param {number} [height] - The height of the image. Defaults to 100.
 * @param {number} [bR] - Border radius for the image
 * @param {object} [ui={}] - Additional UI styles to apply to the image.
 */

const RNImage = ({ uri, height = 100, bR = 0, ui }: RNImageProps) => {
  const { imageStyle, imageViewWrap } = rnImageStyles({ bR, height });
  return (
    <View style={imageViewWrap}>
      <ExpoImage
        source={uri}
        contentFit={"cover"}
        recyclingKey={uri}
        style={imageStyle}
      />
    </View>
  );
};

export default RNImage;
