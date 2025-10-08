// src/components/common/Button.jsx
import React from "react";
import clsx from "clsx";

const Button = ({ label, variant = "primary", onClick }) => {
  const base = "px-6 py-2 rounded-lg font-medium transition";
  const styles = {
    primary: "bg-white text-purple-600 hover:bg-gray-200",
    light: "bg-white text-purple-600 hover:bg-gray-100",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
  };

  return (
    <button onClick={onClick} className={clsx(base, styles[variant])}>
      {label}
    </button>
  );
};

export default Button;
