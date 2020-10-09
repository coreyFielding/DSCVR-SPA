import styled, { css } from "styled-components";
import { Input } from "antd";

const StyledInput = styled(Input)`
  background: ${({ theme }) => theme.input_bg};
  border: 1px solid ${({ theme }) => theme.input_border};
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  color: ${({ theme }) => theme.text};
`;

const styles = {
  StyledInput,
  Label,
};
export { styles };
