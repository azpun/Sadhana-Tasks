import Navbar from "../../components/common/Navbar";
import MobileMenu from "../../components/common/MobileMenu";
import { useBurgerStore } from "../../stores/useToggleBurger";
// import { useDarkStore } from "../../stores/useToggleDark";

export const LandingPage = () => {
  const { isBurgerOpen, setIsBurgerOpen } = useBurgerStore();
  // const { isDark } = useDarkStore();
  // console.log(isDark);
  return (
    <>
      <Navbar />
      <main className="h-screen gap-4 px-4 bg-slate-300 dark:bg-black">
        <div
          className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 border 
        border-slate-300 dark:border-slate-700 rounded-2xl shadow-md h-full "
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Landing Page</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your tasks and improve your productivity
            </p>
          </div>
        </div>
      </main>
      <MobileMenu />
      {isBurgerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsBurgerOpen()}
        ></div>
      )}
    </>
  );
};
