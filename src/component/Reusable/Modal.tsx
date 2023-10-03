import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { ReactNode } from "react";
interface propsType {
  children: ReactNode;
  closeMdl: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal(props: propsType) {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={classes.overlay}
          onClick={() => props.closeMdl(false)}
        ></div>,
        document.getElementById("overlay")!
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>{props.children}</div>,
        document.getElementById("modal")!
      )}
    </>
  );
}
