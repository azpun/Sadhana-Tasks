import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/LandingPage";

const Route: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
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
