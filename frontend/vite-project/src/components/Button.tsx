import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onclick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex justify-center items-center gap-2 cursor-pointer";

const Button = ({
  variant,
  text,
  startIcon,
  fullWidth,
  loading,
  onclick,
}: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${variantClasses[variant]}${fullWidth ? " w-full flex justify-center items-center" : ""}`}
      disabled={loading}
      onClick={onclick}
    >
      {startIcon}
      {text}
    </button>
  );
};

export default Button;
