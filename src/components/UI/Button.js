import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={styles.button}
      type={props.type || "button"} // logical or operator
      onClick={props.onClick} // by naming this prop onClick, we can attach a onClick prop on our custom Button component wherever we use it, and it will behave just like the onClick prop on a regular HTML button element
    >
      {props.children}
      {/* //display the content (aka what the button reads) we place between <Button> and </Button> in the other components where we use our custom Button */}
    </button>
  );
}

export default Button;
