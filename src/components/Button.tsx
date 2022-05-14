import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  otherProps?: any;
}

const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};

export default Button;
