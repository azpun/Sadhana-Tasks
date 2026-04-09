import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    console.log("Data Formulir:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {location.pathname === "/register" && (
        <div className="flex gap-2 mt-4">
          <div className="">
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullname", {
                required: "Fullname wajib diisi",
              })}
              className="w-full pl-3 pr-3 py-2 border border-slate-400 rounded p-1 "
            />
          </div>
        </div>
      )}
      <div className="">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          {...register("email", { required: "Email wajib diisi" })}
          className="w-full pl-3 pr-3 py-2 border border-slate-400 rounded p-1 "
        />
      </div>
      <div className="">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="********"
          {...register("password", { required: "Password wajib diisi" })}
          className="w-full pl-3 pr-3 py-2 border border-slate-400 rounded p-1 "
        />
      </div>
      <Link to="/dashboard">
        <input
          type="submit"
          value={location.pathname === "/register" ? "Register" : "Login"}
          className="bg-blue-500 text-white border-2 border-blue-500 px-4 py-2 rounded-lg mt-2"
        />
      </Link>
      <span className="flex gap-1">
        <p>
          {location.pathname === "/register" ? (
            <p>Already have an account?</p>
          ) : (
            <p>Don't have an account?</p>
          )}
        </p>
        <span>
          {location.pathname === "/register" ? (
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          ) : (
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          )}
        </span>
      </span>
    </form>
  );
};
