import Button from "../../ui/Button/Button";
import { useBurgerStore } from "../../../stores/useToggleBurger";

const BurgerButton = () => {
  const { isBurgerOpen, setIsBurgerOpen } = useBurgerStore();
  return (
    <>
      <Button className="md:hidden" onClick={() => setIsBurgerOpen()}>
        <div className="space-y-2 focus:outline-none">
          <span
            className={`block w-8 h-0.5 bg-black transition-transform ${isBurgerOpen ? "rotate-45 translate-y-2.5" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black transition-opacity ${isBurgerOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black transition-transform ${isBurgerOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          ></span>
        </div>
        {/* <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg> */}
      </Button>
    </>
  );
};

export default BurgerButton;
