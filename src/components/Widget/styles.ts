import styled, { css } from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.widget};
  color: ${({ theme }) => theme.text};
`;
