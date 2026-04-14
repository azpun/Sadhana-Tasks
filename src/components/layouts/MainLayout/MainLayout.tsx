import { useState } from "react";
import Sidebar from "../../common/Sidebar";
import TopBar from "../../common/TopBar";
import SearchMobile from "../../common/SearchMobile";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex w-full h-screen bg-[#F8FAFC] dark:bg-slate-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />

      <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100 h-full overflow-hidden">
        {/* Top Bar */}
        <TopBar
          onMenuClick={() => setIsBurgerOpen(!isBurgerOpen)}
          onSearchClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <SearchMobile isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

        <main className="flex flex-1 flex-col text-slate-900 dark:text-slate-100 overflow-y-auto">
          {/* Main Content */}
          {children}
        </main>
        {/* Footer */}
        <footer></footer>
      </div>
    </div>
  );
};
