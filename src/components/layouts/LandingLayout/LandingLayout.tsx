import MobileMenu from "../../common/MobileMenu";
import Navbar from "../../common/Navbar";

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full gap-4 bg-slate-300 dark:bg-black">
      <Navbar />
      <MobileMenu />
      <main className="h-full gap-4 px-4 bg-slate-300 dark:bg-black">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-900 mt-10 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>© 2026 Task Tracker. All rights reserved.</p>
          </div>
          <div>
            <p>Made by Pun</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
