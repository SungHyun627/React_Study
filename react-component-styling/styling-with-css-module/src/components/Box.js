import styles from "./Box.module.css";

const Box = () => {
  // styles 객체 안에 있는 값 참조
  return <div className={styles.Box}>{styles.Box}</div>;
};

export default Box;
