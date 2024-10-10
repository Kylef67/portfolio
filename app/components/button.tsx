import React from "react";

interface ButtonProps {
    children?: React.ReactNode,
    variant?: 'primary' | 'secondary' | 'outline',
    onClick?: () => void,
    size?: string,
    className?: string
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", onClick }) => {
    const baseStyles =
      "px-4 py-2 rounded-md text-sm font-medium focus:outline-none";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </button>
    );
  }

export default Button;