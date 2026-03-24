import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Route: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export default Route;
