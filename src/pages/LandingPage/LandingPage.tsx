import Navbar from "../../components/common/Navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen gap-4 p-4">
        <div className="flex flex-col items-center justify-center bg-white border border-slate-300 rounded-2xl shadow-md h-full ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Landing Page</h1>
            <p className="text-gray-600">
              Track your tasks and improve your productivity
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
