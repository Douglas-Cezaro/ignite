import { useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Register } from "./src/pages/Register";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  async function prepare() {
    await SplashScreen.hideAsync();
  }
  useEffect(() => {
    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}

