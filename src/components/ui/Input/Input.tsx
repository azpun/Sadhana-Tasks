import type { HTMLInputTypeAttribute } from "react";

const Input = (
  type: HTMLInputTypeAttribute,
  placeholder: string,
  required?: boolean,
  iconSource?: string,
) => {
  return (
    <div className="relative">
      <input type={type} placeholder={placeholder} required={required} />;
      <span>
        <img src={iconSource} alt="" />
      </span>
    </div>
  );
};

export default Input;
