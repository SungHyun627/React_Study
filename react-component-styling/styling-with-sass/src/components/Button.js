import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color }) => {
  return (
    <button className={classNames("Button", size, color)}>{children}</button>
  );
};

// size defaultprops 이용
Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
