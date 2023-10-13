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
      <div className="max-w-lg text-white flex flex-col gap-[10px] rounded-2xl justify-center items-center bg-bl2 px-4 py-12 shadow-2xl ">
        <h3 className=" text-3xl">Login</h3>
        <img src="/logo.png" className="w-1/3" alt="" />
        <InputCredentials type="user" sendDataToLogin={setLoginCredentials} />
        <InputCredentials type="pwd" sendDataToLogin={setLoginCredentials} />
        <br />
        <UiBtn1 value="Join" onClick={sendCredential} />
      </div>
    </Modal>
  );
}
