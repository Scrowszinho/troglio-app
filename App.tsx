import { GlobalProvider } from "./src/context";
import 'react-native-gesture-handler';
import MainNavigation from "./src/navigation";

const App = () => {
  return (
    <GlobalProvider>
      <MainNavigation />
    </GlobalProvider>
  );
};

export default App;