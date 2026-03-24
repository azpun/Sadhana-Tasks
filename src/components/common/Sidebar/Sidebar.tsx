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
        className={`fixed z-30 top-0 left-0 w-1/2 h-screen bg-slate-800 text-white shadow transform transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:sticky md:w-1/4 `}
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
          <nav className="mt-4 md:mt-10">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#Dashboard">Dashboard</a>
              </li>
              <li>
                <a href="#Task">Task</a>
              </li>
              <li>
                <a href="#Profile">Profile</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
