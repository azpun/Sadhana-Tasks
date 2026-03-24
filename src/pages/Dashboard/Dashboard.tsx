import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import StatsCard from "../../components/common/StatsCard";

const Dashboard = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <div className="flex ">
        <aside
          className={`fixed top-0 left-0 w-1/2 h-full bg-white shadow transform transtition-transform duration-300 
            ${isBurgerOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:inset-0 md:w-1/4 md:h-0 `}
        >
          <div className="mt-4 mx-6">
            <Button
              type="button"
              className="block text-2xl md:hidden"
              onClick={() => {
                setIsBurgerOpen(false);
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
          <div className="flex flex-col justify-between px-6 py-4">
            <nav className="mt-4 md:mt-10">
              <ul className="flex flex-col gap-2">
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
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="">
            <div className="flex justify-between items-center bg-slate-200 p-3">
              <Button
                type="button"
                className="w-8 h-8 md:hidden"
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              >
                <img src="/ui/dark/menu-dark.svg" alt="menu-hamburger" />
              </Button>
              <div>
                <h1 className="text-2xl text-black font-bold md:hidden">
                  Tasks Tracker
                </h1>
              </div>
              {/* <nav className="hidden md:block">
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
              </nav> */}
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
            <div className="bg-slate-100 m-2 py-2 rounded-xl">
              <div className="mx-4 my-4">
                <h2 className="text-4xl font-bold">Hello, User.</h2>
                <h3 className="text-xl text-slate-500">
                  You have n tasks today
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4">
                <StatsCard
                  title="Total"
                  iconSource="/ui/todo.svg"
                  color="blue"
                />
                <StatsCard
                  title="Progress"
                  iconSource="/ui/progress.svg"
                  color="orange"
                  bgColorIcon="yellow"
                />
                <StatsCard
                  title="Done"
                  iconSource="/ui/done.svg"
                  color="green"
                />
                <StatsCard
                  title="Overdue"
                  iconSource="/ui/overdue.svg"
                  color="red"
                />
              </div>
            </div>
            <div className="m-2 flex flex-col">
              <div className="mx-4 my-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Today's Tasks</h2>
                <Button className="py-2 px-6 bg-blue-500 text-white rounded-xl">
                  Add Task
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
                  <h3 className="text-xl">Task 1</h3>
                  <div>
                    <div className="my-4 flex gap-3 items-center">
                      <span className="p-2 bg-blue-300 rounded-full">
                        In Progress
                      </span>
                      <span>Low</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
                  <h3 className="text-xl">Task 2</h3>
                  <div>
                    <div className="my-4 flex gap-3 items-center">
                      <span className="p-2 bg-orange-300 rounded-full">
                        To Do
                      </span>
                      <span>Medium</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
                  <h3 className="text-xl">Task 3</h3>
                  <div>
                    <div className="my-4 flex gap-3 items-center">
                      <span className="p-2 bg-green-500 text-white rounded-full">
                        Done
                      </span>
                      <span>High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-2 flex flex-col">
              <div className="mx-4 my-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Upcoming Tasks</h2>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
                  <h3 className="text-xl">Task 1</h3>
                  <div>
                    <div className="my-4 flex gap-3 items-center">
                      <span className="p-2 bg-blue-300 rounded-full">
                        In Progress
                      </span>
                      <span>Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
