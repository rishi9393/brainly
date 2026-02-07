import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onclick?: () => void;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex justify-center items-center gap-2 cursor-pointer";

const Button = ({ variant, text, startIcon, onclick }: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${variantClasses[variant]}`}
      onClick={onclick}
    >
      {startIcon}
      {text}
    </button>
  );
};

export default Button;
