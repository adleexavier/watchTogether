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
          className="fixed w-screen h-screen bg-overlay z-20"
          onClick={() => navigate("/")}
        ></div>,
        document.getElementById("overlay")!
      )}
      {ReactDOM.createPortal(
        <div className="fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-40">
          {props.children}
        </div>,
        document.getElementById("modal")!
      )}
    </>
  );
}
