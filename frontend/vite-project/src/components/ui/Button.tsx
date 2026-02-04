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

const defaultStyles = "rounded-md flex";

const sizeStyle = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6  ",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${variantStyles[props.variant]} ${sizeStyle[props.size]} pl-2 pr-2 ē`}
    >
      <div className="flex ">
        {props.startIcon}
        <div className="pl-2 pr-2">{props.text}</div>
        {props.endIcon}
      </div>
    </button>
  );
};
