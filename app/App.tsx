import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, OccupantPlaceScreen } from "./screens";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="listings" component={OccupantPlaceScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    PassengerSansThin: require("./assets/fonts/PassengerSans-Thin.otf"),
    PassengerSansRegular: require("./assets/fonts/PassengerSans-Regular.otf"),
    PassengerSansMedium: require("./assets/fonts/PassengerSans-Medium.otf"),
    PassengerSansSemibold: require("./assets/fonts/PassengerSans-Semibold.otf"),
    PassengerSansBold: require("./assets/fonts/PassengerSans-Bold.otf"),
  });
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
});
