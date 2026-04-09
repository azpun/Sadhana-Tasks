import { RouterProvider } from "react-router-dom";
import Route from "./routes";
import RootTheme from "./utils/setRootTheme";

const App = () => {
  return (
    <>
      <RootTheme />
      <RouterProvider router={Route} />
    </>
  );
};

export default App;
