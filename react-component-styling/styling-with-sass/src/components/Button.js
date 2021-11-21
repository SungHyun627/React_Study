import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, outline }) => {
  return (
    // outline이 true일 때에만 button에 outline CSS클래스 적용
    <button className={classNames("Button", size, color, { outline })}>
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
