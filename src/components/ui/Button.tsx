import React from "react";

interface ButtonProps {
  lable: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";

  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  lable,
  onClick,
  disabled = false,
  type = "button",
  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 disabled:cursor-not-allowed",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn  ${className}`}
    >
      {lable}
      
    </button>
  );
};
export default Button;