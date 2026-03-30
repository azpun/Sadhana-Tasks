import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 p-4 bg-slate-200">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        <p className="text-gray-600">
          Track your tasks and improve your productivity
        </p>
      </div>
      <div className="flex gap-3">
        <Link to="/login">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};
