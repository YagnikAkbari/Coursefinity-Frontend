import React from "react";

const Button = ({ children, className, disabled, onClick, id }) => {
  const classes = `${className} bg-primary-700 w-full p-[0.8rem] text-white rounded-[0.4rem] disabled:cursor-not-allowed disabled:bg-stone-300`;
  return (
    <button id={id} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
