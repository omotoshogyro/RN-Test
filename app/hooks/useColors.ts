import { useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";
import { DARK_COLORS, LIGHT_COLORS } from "../resources/colors";

const useColors = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      toggleTheme();
    });
    return () => subscription.remove();
  }, []);

  const colors = {
    light: LIGHT_COLORS,
    dark: DARK_COLORS,
  };

  return {
    theme,
    toggleTheme,
    colors: colors[theme],
  };
};

export default useColors;
