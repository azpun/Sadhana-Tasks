import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { useBurgerStore } from "../../../stores/useToggleBurger";
import { useDarkStore } from "../../../stores/useToggleDark";

const MobileMenu = () => {
  const { isBurgerOpen, setIsBurgerOpen } = useBurgerStore();
  const { isDark, setIsDark } = useDarkStore();

  return (
    <>
      {isBurgerOpen && (
        <div className="md:hidden ">
          <aside
            className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 z-50 p-4 transform transition-transform duration-300 ease-in-out 
  ${isBurgerOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <Button className="p-2" onClick={() => setIsDark()}>
                  {isDark ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </Button>
                <Button className="p-2" onClick={() => setIsBurgerOpen()}>
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
              </div>
              <div>
                <ul className="space-y-2 text-lg flex flex-col items-start justify-start">
                  <Link to="/" className="w-full py-2">
                    <li>Home</li>
                  </Link>
                  <Link to="#features" className="w-full py-2">
                    <li>Features</li>
                  </Link>
                  <Link to="#about" className="w-full py-2">
                    <li>About</li>
                  </Link>
                  <Link to="#contact" className="w-full py-2">
                    <li>Contact</li>
                  </Link>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <Link to="/login">
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
