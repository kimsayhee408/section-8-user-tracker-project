import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

//reusable modal component (reusable "wrapper" component)

function ErrorModal(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onDismissModal}></div>{" "}
      {/* empty div for styling -- will add dark overlay in areas "outside" of modal card ; also serves as an element to which we can attach onClick prop to close the modal when this dark overlay is clicked */}
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onDismissModal}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
