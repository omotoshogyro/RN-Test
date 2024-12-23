import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useColors } from "../../hooks";
import {
  OccupantPlaceSelectable,
  PlaceTypeSelectable,
  ProgressStageBar,
} from "../../components";
import { RNButton, RNText } from "../../design-systems";
import {
  CREATE_LISTING_HEADERS,
  OCCUPANTS_PLACE_TYPES,
  PLACE_TYPES,
} from "../../mocks";
import { occupantPlaceScreenStyles } from "./styles";

const OccupantPlaceScreen = ({ navigation: { goBack } }: any) => {
  const { colors } = useColors();
  const [selectedOption, setSelectedOption] = useState("");
  const [active, setActive] = useState("");
  const [currentStage, setCurrentStage] = useState(1);
  const totalStages = 3;
  const {
    btnsWrap,
    pageWrap,
    headerWrap,
    listContainerStyle,
    columnWrapStyle,
  } = occupantPlaceScreenStyles({
    colors,
  });

  const renderPlaceTypes = ({ item }: any) => {
    const { Icon, type } = item;
    return (
      <PlaceTypeSelectable
        Icon={Icon}
        type={type}
        isSelected={type == selectedOption}
        onPress={() => setSelectedOption(type)}
      />
    );
  };

  const renderOccupantPlaceTypes = ({ item }: any) => {
    const { placeType, placeTypeDesc, placeTypeImg } = item;
    return (
      <OccupantPlaceSelectable
        data={{
          placeType,
          placeTypeDesc,
          placeTypeImg,
        }}
        isSelected={active == placeType}
        onPress={() => setActive(placeType)}
      />
    );
  };

  const stageData = () => {
    switch (currentStage) {
      case 1:
        return (
          <FlatList
            data={PLACE_TYPES}
            numColumns={2}
            contentContainerStyle={listContainerStyle}
            columnWrapperStyle={columnWrapStyle}
            renderItem={renderPlaceTypes}
            keyExtractor={(item, index) => `${item.type}-${index}`}
          />
        );
        break;

      case 2:
        return (
          <FlatList
            data={OCCUPANTS_PLACE_TYPES}
            numColumns={2}
            contentContainerStyle={listContainerStyle}
            columnWrapperStyle={columnWrapStyle}
            showsVerticalScrollIndicator={false}
            renderItem={renderOccupantPlaceTypes}
            keyExtractor={(item, index) => `${item.placeType}-${index}`}
          />
        );
        break;

        case 3:
        return (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <RNText text="Last stage of the process" />

          </View>
        );
        break;

      default:
        break;
    }
  };

  const backBtnAction = () =>
    currentStage == 1 ? goBack() : setCurrentStage((stage) => stage - 1);

  return (
    <SafeAreaView style={pageWrap}>
      <View style={headerWrap}>
        <ProgressStageBar
          onBackPress={backBtnAction}
          activeStage={currentStage}
          totalStages={totalStages}
        />
        <RNText
          type="header_1_medium"
          text={CREATE_LISTING_HEADERS[currentStage - 1]}
        />
      </View>

      {stageData()}

      <View style={btnsWrap}>
        <RNButton outline btnText="Save & Exit" style={{flex: 1}} />
        <RNButton
          btnText="Next"
          onPress={() => setCurrentStage((stage) => stage + 1)}
          style={{flex: 1}}
        />
      </View>
    </SafeAreaView>
  );
};

export default OccupantPlaceScreen;
