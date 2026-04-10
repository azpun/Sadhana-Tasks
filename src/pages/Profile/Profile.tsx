import MainLayout from "../../components/layouts/MainLayout";

export const Profile = () => {
  return (
    <MainLayout>
      {/* Profile */}
      <div
        className="flex flex-col shadow-md m-4 p-4 border border-slate-300 dark:border-slate-700 rounded-2xl
      md:flex-row md:items-center"
      >
        <div className="flex justify-center md:justify-start">
          <img src="/ui/user.svg" alt="user" className="w-64 h-64" />
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-2xl font-bold">User</h1>
          <h3 className="text-gray-700 dark:text-gray-400">user@example.com</h3>
          <h3 className="text-gray-700 dark:text-gray-400">
            Freelance Designer
          </h3>
          <button className="bg-blue-500 text-white border-2 border-blue-500 px-4 py-2 rounded-lg mt-2">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Personal Information */}
        <div className="flex flex-col shadow-md m-4 p-4 border border-slate-300 dark:border-slate-700 rounded-2xl gap-4">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-700 dark:text-gray-400">Name: User</h3>
            <h3 className="text-gray-700 dark:text-gray-400">
              Email: user@example.com
            </h3>
            <h3 className="text-gray-700 dark:text-gray-400">
              Phone: +628123456789
            </h3>
            <h3 className="text-gray-700 dark:text-gray-400">
              Location: Jakarta, Indonesia
            </h3>
            <h3 className="text-gray-700 dark:text-gray-400">
              Role: Freelance Designer
            </h3>
          </div>
        </div>

        {/* Preferences */}
        <div className="flex flex-col shadow-md m-4 p-4 border border-slate-300 dark:border-slate-700 rounded-2xl gap-4">
          <h2 className="text-2xl font-bold">Preferences</h2>
          <div className="flex gap-2">
            <label htmlFor="" className="text-gray-700 dark:text-gray-400">
              Dark Mode
            </label>
            <input type="checkbox" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="" className="text-gray-700 dark:text-gray-400">
              Notifications
            </label>
            <input type="checkbox" />
          </div>
          <div className="relative flex gap-2">
            <label htmlFor="" className="text-gray-700 dark:text-gray-400">
              Languages
            </label>
            <select
              name=""
              id=""
              className=" border border-slate-500 dark:border-slate-700 rounded-lg"
            >
              <option value="">English</option>
              <option value="">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
