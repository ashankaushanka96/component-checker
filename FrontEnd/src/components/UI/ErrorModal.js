import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
// import ReactDOM from "react-dom";

function ErrorModal(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClickOkay} />;
  };

  const Overlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClickOkay}>Retry</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {/* {ReactDOM.createPortal(
        <Backdrop onClickOkay={props.onClickOkay} />,
        document.getElementById("backdrop-root")
      )} */}
      <Backdrop onClickOkay={props.onClickOkay} />
      {/* {ReactDOM.createPortal(
        <Overlay onClickOkay={props.onClickOkay} title= {props.title} message={props.message}/>,
        document.getElementById("overlay-root")
      )} */}
      <Overlay onClickOkay={props.onClickOkay} title= {props.title} message={props.message}/>
    </>
  );
}

export default ErrorModal;
