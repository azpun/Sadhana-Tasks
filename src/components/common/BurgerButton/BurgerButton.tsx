import Button from "../../ui/Button/Button";
import { useBurgerStore } from "../../../stores/useToggleBurger";

const BurgerButton = () => {
  const { setIsBurgerOpen } = useBurgerStore();

  return (
    <>
      <Button className="md:hidden" onClick={() => setIsBurgerOpen()}>
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </>
  );
};

export default BurgerButton;
