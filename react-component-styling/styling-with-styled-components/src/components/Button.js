import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
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
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) =>
    css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}
`;

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

  // 크기
  ${sizeStyles}

  // 색상
  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }
`;
const Button = ({ children, color, size, ...rest }) => {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

// 버튼의 초기 색깔 blue로 설정
Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
