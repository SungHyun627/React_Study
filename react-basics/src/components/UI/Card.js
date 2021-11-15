import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // Using Props.children
  return <div className={classes}>{props.children}</div>;
};

export default Card;
