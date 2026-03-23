import { useState } from "react";
// import styles from "./workspace.module.css";
// import BurgerNav from "../../components/common/BurgerNav/BurgerButton";
import Button from "../../components/ui/Button/Button";

const Workspace = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <header className="">
        <div className="flex justify-between items-center bg-slate-200 p-3">
          <Button
            type="button"
            className="w-8 h-8 md:hidden"
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          >
            <img src="/ui/dark/menu-dark.svg" alt="menu-hamburger" />
          </Button>
          <div
            className={`fixed top-0 left-0 w-1/2 bg-white shadow transform transtition-transform duration-300 
            ${isBurgerOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Button
              type="button"
              className="p-4 ml-2 my-1 text-2xl"
              onClick={() => {
                setIsBurgerOpen(false);
              }}
            >
              X
            </Button>
            <div className="flex flex-col gap-2 justify-between ">
              <nav className="ml-8 my-2">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className=" flex items-center m-2 gap-2">
                <div className="w-12 h-12">
                  <img src="/ui/user.svg" alt="user" />
                </div>
                <div>User</div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-black">Tasks Tracker</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <div className="w-12 h-12">
              <a href="#">
                <img src="/ui/user.svg" alt="user" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <h2 className="text-center sm:text-left">Tasks</h2>
        </div>
      </main>
      <footer>
        <div>
          <h3>Footer</h3>
        </div>
      </footer>
    </>
  );
};

export default Workspace;
