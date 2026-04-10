import { Link } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";

export const LandingPage = () => {
  const features = [
    {
      name: "Have a look at your dashboard",
      description:
        "See all your tasks in one place, organized by status and priority.",
      icon: "/ui/dash.svg",
    },
    {
      name: "Set up your tasks",
      description:
        "Set up your tasks in one place, organized by categories and priority.",
      icon: "/ui/task.svg",
    },
    {
      name: "Track your progress",
      description:
        "Track your progress and stay motivated with our intuitive progress tracking system.",
      icon: "/ui/progress-bar.svg",
    },
    {
      name: "Get reminders",
      description:
        "Get reminders for your tasks to stay on track and never miss a deadline.",
      icon: "/ui/bell.svg",
    },
  ];
  return (
    <>
      <LandingLayout>
        <div className="bg-white dark:bg-gray-900 rounded-2xl">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white">
                  Make your life easier with Task Tracker
                </h1>
                <p className="mt-8 text-md md:text-lg font-medium text-pretty text-gray-600 dark:text-gray-400">
                  Task Tracker is a simple and intuitive task management tool
                  that helps you stay organized and productive.
                </p>
                <div className="mt-10 flex flex-col gap-4 md:flex-row items-center justify-center gap-x-6">
                  <Link
                    to="/login"
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/features"
                    className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Features
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-400">
                Task Tracker is a simple and intuitive task management tool that
                helps you stay organized and productive.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-black dark:text-white">
                    <div className="absolute top-0 left-3 flex size-10 items-center justify-center rounded-lg bg-blue-500">
                      <img src={feature.icon} alt="icon" className="size-6" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-700 dark:text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative py-20 sm:py-28 h-fit bg-white dark:bg-gray-900 rounded-2xl my-10 md:flex md:justify-between ">
          <div className="z-50 mx-auto max-w-md text-center lg:mx-15 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance text-black dark:text-white sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-md md:text-lg text-pretty text-gray-700 dark:text-gray-400">
              Task Tracker is a simple and intuitive task management tool that
              helps you stay organized and productive.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white 
                inset-ring inset-ring-white/5 hover:bg-blue-400 focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-black dark:text-white hover:text-gray-100"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </LandingLayout>
    </>
  );
};
