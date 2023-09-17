import { ActivityIndicator } from '@react-native-material/core';
import { GlobalProvider } from "./src/context";
import MainNavigation from "./src/navigation";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GlobalProvider>
      { fontsLoaded ? <MainNavigation /> : <ActivityIndicator size="large" color="error" /> }
    </GlobalProvider>
  );
};

export default App;