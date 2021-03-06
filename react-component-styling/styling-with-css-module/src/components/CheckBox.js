import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.css";
import classnames from "classnames/bind";

// Use classnames' bind function
const cx = classnames.bind(styles);

const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <div className={cx("checkbox")}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;
