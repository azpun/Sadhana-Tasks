import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-slate-200">
      <h1 className="text-2xl font-bold">Tasks Tracker</h1>
      <nav className="flex items-center gap-2">
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
      </nav>
    </header>
  );
};

export default Navbar;
