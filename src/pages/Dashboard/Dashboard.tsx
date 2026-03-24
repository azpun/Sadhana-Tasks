import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import StatsCard from "../../components/common/StatsCard";
import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";

const Dashboard = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <div className="flex ">
        <Sidebar isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />

        <div className="flex flex-1 flex-col">
          <Navbar onMenuClick={() => setIsBurgerOpen(!isBurgerOpen)} />

          <main className="flex flex-col">
            <div className="bg-slate-100 m-2 rounded-xl">
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
