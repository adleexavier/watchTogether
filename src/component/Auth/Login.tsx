import classes from "./Login.module.css";
import InputCredentials from "../../ui/InputCredentials";
import UiBtn1 from "../../ui/UiBtn1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Reusable/Modal";
export default function Login() {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    name: "",
    password: "",
  });

  const sendCredential = () => {
    loginCredentials.name === "Adlee" &&
      loginCredentials.password === "123" &&
      navigate("/home");
  };
  return (
    <Modal>
      <div className={classes.loginContainer}>
        <h3>Welcome</h3>
        <img src="/logo.png" className={classes.logo} alt="" />
        <InputCredentials type="user" sendDataToLogin={setLoginCredentials} />
        <InputCredentials type="pwd" sendDataToLogin={setLoginCredentials} />
        <UiBtn1 value="Join" onClick={sendCredential} />
      </div>
    </Modal>
  );
}
