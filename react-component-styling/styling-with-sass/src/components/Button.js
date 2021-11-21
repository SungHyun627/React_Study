import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    // outline이 true일 때에만 button에 outline CSS클래스 적용
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      // ...rest를 사용하여 지정한 props를 제외한 값들을 rest객체에 모아주고 button tag에 설정
      {...rest}
    >
      {children}
    </button>
  );
};

// size defaultprops 이용
Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
