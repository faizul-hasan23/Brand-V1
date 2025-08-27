import MainNavigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/rootNavigator";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "./src/utils/globalStyle";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Syne-Regular": require("./src/assets/fonts/Syne-Regular.ttf"),
    "Syne-Bold": require("./src/assets/fonts/Syne-Bold.ttf"),
    "Syne-ExtraBold": require("./src/assets/fonts/Syne-ExtraBold.ttf"),
    "Syne-Medium": require("./src/assets/fonts/Syne-Medium.ttf"),
    "Syne-SemiBold": require("./src/assets/fonts/Syne-SemiBold.ttf"),
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={globalStyles.loaderContainer}>
        <ActivityIndicator size={"large"} color={"white"} animating />
      </View>
    );
  }
  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
}
