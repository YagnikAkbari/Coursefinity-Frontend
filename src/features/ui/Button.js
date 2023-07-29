import React from "react";

const Button = ({ children, className }) => {
  const classes = `${className} bg-primary-700 w-full p-[0.8rem] text-white rounded-[0.4rem] block`;
  return <button className={classes}>{children}</button>;
};

export default Button;
