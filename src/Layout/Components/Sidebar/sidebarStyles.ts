import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

interface ISidebar {
  width: number;
  height: number | string;
  children: any;
  [key: string]: any;
}

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 3;
  background: ${({ theme }) => theme.sidebar_header};
`;

export const Body = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const Footer = styled.div`
  flex: 1;
  position: absolute;
  bottom: 0;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;

  &:hover {
    color: ${({ theme }) => theme.text_hover};

    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: inherit;
      background: "#000";
      z-index: 1000;
    }
  }

  &.${(props) => props.activeClassName} {
    color: ${({ theme }) => theme.text_hover};
    background: ${({ theme }) => `rgba(${theme.hover}, .3)`};
  }
`;

export const Toggle = styled.button.attrs((props) => ({
  className: props.className,
}))`
  height: 70px;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  position: absolute;
  width: 30px;
  outline: none;
  z-index: 100;
  background-color: #dbedf3;
  opacity: 0.6;
  border-left: 0;
`;

export const Sidebar = styled.div.attrs((props) => ({
  className: props.className,
}))<ISidebar>`
  display: flex;
  position: fixed;
  background: ${({ theme }) => theme.sidebar};
  overflow-y: auto;
  overflow-x: hidden;
  min-height: ${(minHeight) => minHeight};
  width: ${(width) => width};
  translate-x: ${(xPos) => `${xPos}px`}
    ${(width) =>
      width &&
      css`
        @media (min-width: 1900px) {
          width: 0;
        }
      `};
`;
