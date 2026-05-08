import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary:
    "bg-gradient-to-r from-[#6d5cff] via-[#7c4dff] to-[#8b5bff] text-white shadow-[0_12px_30px_rgba(124,77,255,0.4)]",
  secondary: "bg-[#1b1f27] text-white/80 border border-white/10",
};

const defaultStyles =
  "px-4 py-2 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(124,77,255,0.25)] disabled:opacity-60 disabled:cursor-not-allowed";

const Button = ({
  variant,
  text,
  startIcon,
  fullWidth,
  loading,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${variantClasses[variant]}${fullWidth ? " w-full flex justify-center items-center" : ""}`}
      disabled={loading}
      onClick={onClick}
    >
      {startIcon}
      {text}
    </button>
  );
};

export default Button;
