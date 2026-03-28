import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    console.log("Data Formulir:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {location.pathname === "/register" && (
        <div className="relative">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Name wajib diisi" })}
            className="w-full pl-10 pr-3 py-2 border border-slate-400 rounded p-1 "
          />
          <span className="absolute left-2 bottom-2">
            <img src="ui/name-slate-400.svg" alt="name" className="w-6 h-6" />
          </span>
        </div>
      )}
      <div className="relative">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          {...register("email", { required: "Email wajib diisi" })}
          className="w-full pl-10 pr-3 py-2 border border-slate-400 rounded p-1 "
        />
        <span className="absolute left-2 bottom-2">
          <img src="ui/email-slate-400.svg" alt="email" className="w-6 h-6" />
        </span>
      </div>
      <div className="relative">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="********"
          {...register("password", { required: "Password wajib diisi" })}
          className="w-full pl-10 pr-3 py-2 border border-slate-400 rounded p-1 "
        />
        <span className="absolute left-2 bottom-2">
          <img
            src="ui/password-slate-400.svg"
            alt="password"
            className="w-6 h-6"
          />
        </span>
      </div>
      <input
        type="submit"
        className="bg-blue-500 text-white border-2 border-blue-500 px-4 py-2 rounded-lg mt-2"
      />
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
