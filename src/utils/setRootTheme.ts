import { useEffect } from "react";
import { useDarkStore } from "../stores/useToggleDark";

const RootTheme = () => {
  const { isDark } = useDarkStore();

  useEffect(() => {
    // Debugging: Cek apakah isDark benar-benar berubah di console
    console.log("isDark status:", isDark);

    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return null;
};

export default RootTheme;
