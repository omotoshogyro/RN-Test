import {
  ApartmentIcon,
  CoLivingSpaceIcon,
  CondominiumIcon,
  DormitoryIcon,
  DuplexIcon,
  LoftIcon,
  StudioApartmentIcon,
  TownHouseIcon,
} from "../assets/svg";
import type { PlaceAndIconProps } from "../components/place-type-selectable/types";

export const PLACE_TYPES: any[] = [
  {
    type: "Apartment/Flat",
    Icon: ApartmentIcon,
  },
  {
    type: "Co-living space",
    Icon: CoLivingSpaceIcon,
  },
  {
    type: "Townhouse",
    Icon: TownHouseIcon,
  },
  {
    type: "Duplex",
    Icon: DuplexIcon,
  },
  {
    type: "Studio Apartment",
    Icon: StudioApartmentIcon,
  },
  {
    type: "Dormitory",
    Icon: DormitoryIcon,
  },
  {
    type: "Loft",
    Icon: LoftIcon,
  },

  {
    type: "Condominium",
    Icon: CondominiumIcon,
  },
];
