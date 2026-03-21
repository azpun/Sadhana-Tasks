import { RouterProvider } from "react-router-dom";
import Route from "./routes";

const App = () => {
  return (
    <>
      <RouterProvider router={Route} />
    </>
  );
};

export default App;
