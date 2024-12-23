import { View, Text } from "react-native";
import React from "react";
import { useColors } from "../../hooks";
import { RNButton } from "../../design-systems";

const HomeScreen = ({ navigation }: any) => {
  const { colors } = useColors();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <RNButton
        onPress={() => navigation.navigate("listings")}
        btnText="Create Listing"
      />
    </View>
  );
};

export default HomeScreen;
