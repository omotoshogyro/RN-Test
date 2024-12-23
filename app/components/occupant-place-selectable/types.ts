export type OccupantPlaceProps = {
  isSelected: boolean;
  data: {
    placeType: string;
    placeTypeDesc: string;
    placeTypeImg: string;
  };

  onPress: () => void;
};
