import type { RouteObject } from "react-router-dom";
import Workspace from "../pages/Workspace";

const Route: RouteObject[] = [
  {
    path: "/",
    element: <Workspace />,
  },
];

export default Route;
