import { GlobalProvider } from "./src/context";
import MainNavigation from "./src/navigation";

const App = () => {
  return (
    <GlobalProvider>
      <MainNavigation />
    </GlobalProvider>
  );
};

export default App;