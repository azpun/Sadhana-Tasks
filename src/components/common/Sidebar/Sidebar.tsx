import { Link, useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import NavItem from "../NavItem";
import DarkmodeButton from "../DarkmodeButton";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { href: "/dashboard", icon: "/ui/dashboard.svg", label: "Dashboard" },
    { href: "/tasks", icon: "/ui/tasks.svg", label: "Tasks" },
    { href: "/profile", icon: "/ui/user-nav.svg", label: "Profile" },
  ];
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-30 top-0 left-0 w-64  bg-[#1E293B] text-white shadow transform transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:sticky md:w-1/5 `}
      >
        <div className="mt-4 mx-6 flex justify-between">
          <Button
            type="button"
            className="block text-2xl md:hidden"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <DarkmodeButton />
        </div>
        <div className="flex flex-col justify-between h-190">
          <div>
            <div>
              <h1 className="hidden text-2xl font-bold px-6 md:flex">
                Tasks Tracker
              </h1>
            </div>
            <div className="flex flex-col justify-between px-6 ">
              <nav className="mt-10 md:mt-10">
                <ul className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <NavItem
                      key={item.href}
                      iconSource={item.icon}
                      href={item.href}
                      isActive={location.pathname === item.href}
                    >
                      {item.label}
                    </NavItem>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="m-4">
            <Link to="/login" className="w-full">
              <Button
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
