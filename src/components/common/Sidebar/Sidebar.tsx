import Button from "../../ui/Button/Button";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-30 top-0 left-0 w-1/2 h-screen bg-[#1E293B] text-white shadow transform transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:sticky md:w-1/5 `}
      >
        <div className="mt-4 mx-6">
          <Button
            type="button"
            className="block text-2xl md:hidden"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </Button>
        </div>
        <div>
          <h1 className="hidden text-2xl font-bold px-6 md:flex">
            Tasks Tracker
          </h1>
        </div>
        <div className="flex flex-col justify-between px-6 ">
          <nav className="mt-10 md:mt-10">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <img
                  src="/ui/dashboard.svg"
                  alt="dashboard"
                  className="w-6 h-6"
                />
                <a href="#Dashboard">Dashboard</a>
              </li>
              <li className="flex items-center gap-3">
                <img src="/ui/tasks.svg" alt="tasks" className="w-6 h-6" />
                <a href="#Task">Tasks</a>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/ui/user-nav.svg"
                  alt="user-nav"
                  className="w-6 h-6"
                />
                <a href="#Profile">Profile</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
