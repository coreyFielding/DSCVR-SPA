import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

interface IThemeToggle {
  toggleTheme: any;
}

const ThemeToggle = ({ toggleTheme }: IThemeToggle) => {
  return <Button onClick={toggleTheme}>Switch</Button>;
};

export default ThemeToggle;
