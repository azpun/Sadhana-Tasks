import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";

const Route: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
