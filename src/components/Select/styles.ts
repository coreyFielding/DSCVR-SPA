import styled from "styled-components";
import { Select } from "antd";

export const StyledSelect = styled(Select)`
  .ant-select-selection {
    background-color: green;
  }
  width: 100%;
  background: ${({ theme }) => theme.background};
`;
