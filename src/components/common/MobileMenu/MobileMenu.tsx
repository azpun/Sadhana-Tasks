import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { useBurgerStore } from "../../../stores/useToggleBurger";
import DarkmodeButton from "../DarkmodeButton";

const MobileMenu = () => {
  const { isBurgerOpen, setIsBurgerOpen } = useBurgerStore();

  return (
    <>
      {/* overlay */}
      {isBurgerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsBurgerOpen()}
        ></div>
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 
              z-50 p-4 transform transition-transform duration-300 ease-in-out ${isBurgerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <DarkmodeButton />
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
    </>
  );
};

export default MobileMenu;
