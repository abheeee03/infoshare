import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {AppProvider} from './Context/context.jsx'
export default function RootLayout() {

  useFonts({
    "Afacad": require("../assets/fonts/AfacadFlux-Regular.ttf"),
    "Afacad-B": require("../assets/fonts/AfacadFlux-Bold.ttf"),
    "Afacad-M": require("../assets/fonts/AfacadFlux-Medium.ttf"),
  });


  return (
    <AppProvider>
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
    </AppProvider>
    );
}
