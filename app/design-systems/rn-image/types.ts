import { DimensionValue, ImageProps, ImageStyle } from "react-native";
export type RNImageProps = {
  uri: string;
  width?: DimensionValue;
  height?: DimensionValue;
  bR?: number;
  ui?: ImageStyle;
  fill?: boolean;
} & ImageProps;

