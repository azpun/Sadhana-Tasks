import { useForm } from "react-hook-form";

export const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    console.log("Data Formulir:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <label htmlFor="">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email wajib diisi" })}
          className="w-full pl-10 pr-3 py-2 border border-slate-500 rounded p-1 "
        />
        {/* <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <img src="ui/email-slate.svg" alt="email" />
        </span> */}
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password wajib diisi" })}
          className="w-full pl-10 pr-3 py-2 border border-slate-500 rounded p-1 "
        />
      </div>
      <input
        type="submit"
        className="bg-blue-500 text-white border-2 border-blue-500 px-4 py-2 rounded-lg mt-2"
      />
    </form>
  );
};
