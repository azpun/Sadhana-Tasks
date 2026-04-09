import Button from "../../ui/Button/Button";
import { useBurgerStore } from "../../../stores/useToggleBurger";

const BurgerButton = () => {
  const { isBurgerOpen, setIsBurgerOpen } = useBurgerStore();

  return (
    <>
      <Button className="md:hidden" onClick={() => setIsBurgerOpen()}>
        <div className="space-y-2 focus:outline-none">
          <span
            className={`block w-8 h-0.5 bg-black dark:bg-white transition-transform ${isBurgerOpen ? "rotate-45 translate-y-2.5" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black dark:bg-white transition-opacity ${isBurgerOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black dark:bg-white transition-transform ${isBurgerOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          ></span>
        </div>
      </Button>
    </>
  );
};

export default BurgerButton;
