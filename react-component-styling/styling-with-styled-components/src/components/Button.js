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
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
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

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      // 연속된 sibling component에 대해 margin-left : 0이 적용되지 않는다(고민 필요)
      & + & {
        margin-top: 1rem;
        margin-left: 0;
      }
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

  ${fullWidthStyle}

  & + & {
    margin-left: 1rem;
  }
`;
const Button = ({ children, color, size, outline, fullWidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
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
