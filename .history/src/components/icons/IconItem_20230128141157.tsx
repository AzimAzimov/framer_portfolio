import Styles from "../common/header/Header.module.scss";
import React, { FC } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
interface IHeaderIconProps {
  url: string;
  children: ReactJSXElement;
  className: string;
  onClick?: () => void;
}
const IconItem: FC<IHeaderIconProps> = ({ url, children, className }) => {
  return (
    <Link url={url} classLink={Styles[className]}>
      {children}
    </Link>
  );
};
export { IconItem };
