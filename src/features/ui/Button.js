import React from "react";

const Button = ({ children, className, disabled }) => {
  const classes = `${className} bg-primary-700 w-full p-[0.8rem] text-white rounded-[0.4rem] disabled:cursor-not-allowed`;
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
