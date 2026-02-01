import type { ReactElement } from "react";
// import default from './../../../node_modules/@vitejs/plugin-react/dist/refresh-runtime';

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-400 text-white",
};

const defaultStyles = "rounded-md";

const sizeStyle = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${variantStyles[props.variant]} ${sizeStyle[props.size]}`}
    >
      {props.text}
    </button>
  );
};
