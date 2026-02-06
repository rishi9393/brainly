import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex justify-center items-center gap-2";

const Button = ({ variant, text, startIcon }: ButtonProps) => {
  return (
    <button className={`${defaultStyles} ${variantClasses[variant]}`}>
      {startIcon}
      {text}
    </button>
  );
};

export default Button;
