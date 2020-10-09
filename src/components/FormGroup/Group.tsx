import React, { useContext } from "react";
import { styles } from "./styles";

interface IGroup {
  label?: string;
  display?: string;
  width?: string;
  children: React.ReactNode | React.ReactNode[];
}
export const Group = ({ label, display, width, children }: IGroup) => {
  const { Label } = styles;
  return (
    <span
      className={`w-${width} ${
        display === "inline" ? "whitespace-no-wrap" : ""
      }`}
    >
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      {children}
    </span>
  );
};
