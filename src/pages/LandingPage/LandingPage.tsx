import LandingLayout from "../../components/layouts/LandingLayout";

export const LandingPage = () => {
  return (
    <>
      <LandingLayout>
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
      </LandingLayout>
    </>
  );
};
