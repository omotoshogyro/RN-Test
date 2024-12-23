import { View, Text } from "react-native";
import React from "react";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useColors } from "../../hooks";
import { RNText, RNTouchable } from "../../design-systems";
import { BackArrowIcon } from "../../assets/svg";
import { progressStageBarStyles } from "./styles";

const ProgressStageBar = ({
  activeStage = 1,
  totalStages = 2,
  onBackPress,
}: {
  activeStage?: number;
  totalStages?: number;
  onBackPress: () => void;
}) => {
  const { colors } = useColors();
  const {
    containerWrap,
    backArrowBg,
    progressStagesWrap,
    eachProgressBar,
    animatedProgressBar,
  } = progressStageBarStyles({ colors });
  return (
    <View style={containerWrap}>
      <RNTouchable onPress={onBackPress} ui={backArrowBg}>
        <BackArrowIcon />
      </RNTouchable>

      <View style={progressStagesWrap}>
        {new Array(totalStages).fill("1").map((data, index) => {
          const isActiveIndex = index < activeStage;
          return (
            <Animated.View key={`${index}-bar-${data}`} style={eachProgressBar}>
              <Animated.View
                layout={LinearTransition}
                style={[
                  animatedProgressBar,
                  {
                    width: isActiveIndex ? "100%" : "0%",
                  },
                ]}
              />
            </Animated.View>
          );
        })}
      </View>
      <RNText
        text={`${activeStage}/${totalStages}`}
        type="body_1_regular"
        color="black40"
      />
    </View>
  );
};

export default ProgressStageBar;
