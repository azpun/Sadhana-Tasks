import { create } from "zustand";

type BurgerStore = {
  isBurgerOpen: boolean;
  setIsBurgerOpen: () => void;
};

export const useBurgerStore = create<BurgerStore>((set) => ({
  isBurgerOpen: false,
  setIsBurgerOpen: () =>
    set((state) => ({ isBurgerOpen: !state.isBurgerOpen })),
}));
