import { useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input";
import { useDarkStore } from "../../../stores/useToggleDark";

interface TopBarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export const TopBar = ({ onMenuClick, onSearchClick }: TopBarProps) => {
  const { isDark } = useDarkStore();
  const location = useLocation();
  return (
    <header className="md:sticky md:top-0 md:z-10">
      <div className="flex justify-between items-center bg-white p-3 dark:bg-slate-900 ">
        {/* Burger Button Mobile */}
        <Button className="w-8 h-8 md:hidden" onClick={onMenuClick}>
          {isDark ? (
            <img src="/ui/light/menu-light.svg" alt="menu-hamburger" />
          ) : (
            <img src="/ui/dark/menu-dark.svg" alt="menu-hamburger" />
          )}
        </Button>

        {/* Title Dynamic */}
        <div className="text-xl md:text-2xl text-black dark:text-slate-100 font-bold">
          <h1 className="hidden md:block">
            {location.pathname === "/tasks"
              ? "Tasks"
              : location.pathname === "/profile"
                ? "Profile"
                : location.pathname === "/"
                  ? "Dashboard"
                  : "Tasks Tracker"}
          </h1>
          <h1 className="block md:hidden">
            Tasks Tracker
            {/* {location.pathname === "/tasks"
              ? "Tasks"
              : location.pathname === "/profile"
                ? "Profile"
                : location.pathname === "/"
                  ? "Dashboard"
                  : "Tasks Tracker"} */}
          </h1>
          {/* <h1 className="block md:hidden">
            {location.pathname === "/tasks" ? "Tasks" : "Tasks Tracker"}
          </h1>
          <h1 className="block md:hidden">
            {location.pathname === "/profile" ? "Profile" : "Tasks Tracker"}
          </h1> */}
        </div>

        {/* Search and User */}
        <div className="flex items-center gap-2 md:gap-3">
          {location.pathname === "/tasks" && (
            <>
              {/* Search Input Desktop */}
              <Input
                type="search"
                placeholder="Search"
                name="search"
                required
                iconSource="/ui/search.svg"
              />
              {/* Search Button Mobile */}
              <div className="block md:hidden">
                <Button className="w-8 h-8" onClick={onSearchClick}>
                  <img src="/ui/search.svg" alt="search" />
                </Button>
              </div>
              {/* Filter Button Mobile (mockup has a downward caret or filter icon, using text or simple svg for now) */}
              <div className="block md:hidden">
                <Button className="w-8 h-8 flex items-center justify-center">
                  <span className="text-xl text-slate-600">
                    {/* <img src="/ui/filter.svg" alt="filter" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 4H3l7 8.35v6.65a1 1 0 001 1h2a1 1 0 001-1v-6.65z"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            </>
          )}

          {/* User Profile */}
          <div className="w-10 h-10 md:w-12 md:h-12 ml-1">
            <a href="#">
              <img
                src="/ui/user.svg"
                alt="user"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
