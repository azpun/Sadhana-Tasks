import type { HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  required?: boolean;
  iconSource?: string;
}

const Input = ({
  type,
  placeholder,
  required,
  iconSource,
  name,
}: InputProps) => {
  return (
    <div className="hidden relative w-64 md:block">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        className=" w-full pl-10 pr-3 py-2 border border-slate-500 rounded p-1 "
      />

      <span className="absolute left-3 top-1/2 -translate-y-1/2">
        <img src={iconSource} alt="" className="w-6 h-6" />
      </span>
    </div>
  );
};

export default Input;
