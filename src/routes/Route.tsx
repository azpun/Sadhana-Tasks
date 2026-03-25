import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Profile from "../pages/Profile";

const Route: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default Route;
