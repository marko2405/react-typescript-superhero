import React from "react";
type InputProps = {
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};

const Input = ({
  name,
  value,
  type,
  onChange,
  className,
  onKeyDown,
  disabled,
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      onKeyDown={onKeyDown}
      disabled={disabled}
      placeholder={`Enter ${name}`}
      className={`flex-1 bg-transparent placeholder-gray-300 px-3 py-1 border-2 border-gray-300 rounded-full ${className}}`}
    />
  );
};

export default Input;
