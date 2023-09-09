import React, { FC } from 'react'

import "./Button.css";

interface IButton {
  children?: string | React.ReactElement | React.ReactNode;

  link?: string;
}

const Button: FC <IButton> = ({ children }) => {
  return (
    <a href="#" className="btn">
      {children}
    </a>
  );
};

export default Button