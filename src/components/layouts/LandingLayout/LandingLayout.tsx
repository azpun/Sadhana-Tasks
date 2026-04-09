import MobileMenu from "../../common/MobileMenu";
import Navbar from "../../common/Navbar";

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MobileMenu />
      <Navbar />
      <main className="h-screen gap-4 px-4 bg-slate-300 dark:bg-black">
        {children}
      </main>
    </div>
  );
};
