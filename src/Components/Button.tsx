import React from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
  loading?: boolean;
};

const Button = ({
  text = "Button",
  onClick,
  className,
  secondary,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 flex justify-center items-center gap-3 px-9 rounded-full text-white border-2 border-white hover:bg-myPink
         transition-all hover:drop-shadow-lg ${
           secondary ? "bg-myPink" : "bg-myBlue"
         } ${className} ${loading && `cursor-wait`}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
};

export default Button;
