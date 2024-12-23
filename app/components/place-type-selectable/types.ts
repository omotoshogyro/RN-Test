import { SvgProps } from "react-native-svg";

export type PlaceType =
  | "Apartment/Flat"
  | "Co-living space"
  | "Townhouse"
  | "Duplex"
  | "Studio Apartment"
  | "Dormitory"
  | "Loft"
  | "Condominium";

export type PlaceAndIconProps = {
  type: PlaceType;
  Icon: React.FC<SvgProps>;
  isSelected?: boolean;
  onPress?: () => void
};
