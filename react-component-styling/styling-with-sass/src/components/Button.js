import "./Button.scss";
import classNames from 'classnames';

const Button = ({ children, size }) => {
  return <button className={classNames('Button', size)}>{children}</button>;
};

// size defaultprops 이용
Button.defaultProps = {
  size: "medium",
};

export default Button;
