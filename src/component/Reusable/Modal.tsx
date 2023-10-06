import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
interface propsType {
  children: ReactNode;
}
export default function Modal(props: propsType) {
  const navigate = useNavigate();
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={classes.overlay}
          onClick={() => navigate("/")}
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
