import React, { ReactChild } from "react";
import { NavLink as Link } from "react-router-dom";
import { SidebarLink as NavLink } from "./sidebarStyles";
import { useViewport } from "../../../providers/Viewport";

interface INavLink {
  path: string;
  name: string;
  icon: string;
  sidebar: string;
}
const SidebarLink = ({ ...props }: INavLink) => {
  const { device } = useViewport();

  return (
    <NavLink
      to={props.path}
      activeClassName="bg-red-300"
      className="h-8 text-left"
    >
      <span className="p-2 pr-1 h-5 w-5">{props.icon}</span>
      {device === "tablet" ? null : (
        <span className="p-2 leading-tight text-sm">{props.sidebar}</span>
      )}
    </NavLink>
  );
};

export default SidebarLink;
