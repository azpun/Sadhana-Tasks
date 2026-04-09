import { create } from "zustand";

type DarkStore = {
  isDark: boolean;
  setIsDark: () => void;
};

export const useDarkStore = create<DarkStore>((set) => ({
  isDark: false,
  setIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));
