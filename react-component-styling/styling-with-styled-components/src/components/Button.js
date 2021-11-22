import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  height: 2.25rem;
  font-size: 1rem;
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

  & + & {
    margin-left: 1rem;
  }
`;
const Button = ({ children, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

// 버튼의 초기 색깔 blue로 설정
Button.defaultProps = {
  color: "blue",
};

export default Button;
