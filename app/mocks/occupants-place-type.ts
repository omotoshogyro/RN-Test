import {
  CoLivingSpaceImg,
  EntirePlaceImg,
  PrivateRoomImg,
  SharedRoomImg,
  StudioRoomImg,
} from "../assets/images";

export const OCCUPANTS_PLACE_TYPES = [
  {
    placeType: "An entire place",
    placeTypeDesc: "Occupants have the whole building to themselves",
    placeTypeImg: EntirePlaceImg,
  },
  {
    placeType: "A private room",
    placeTypeDesc:
      "Occupants have a room in the home, and access to shared places. ",
    placeTypeImg: PrivateRoomImg,
  },
  {
    placeType: "A shared  room",
    placeTypeDesc:
      "A shared bedroom for budget-conscious renters and community seekers.",
    placeTypeImg: SharedRoomImg,
  },
  {
    placeType: "A Studio",
    placeTypeDesc:
      "A self-contained, single-room unit with a private bathroom and kitchenette",
    placeTypeImg: StudioRoomImg,
  },
  {
    placeType: "A co-living space",
    placeTypeDesc:
      "A shared living space with private rooms and communal areas.",
    placeTypeImg: CoLivingSpaceImg,
  },
];
