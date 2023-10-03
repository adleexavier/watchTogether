import cls from "./Welcome.module.css";
import UiBtn1 from "../../ui/UiBtn1";
import { useState } from "react";
import Login from "../Auth/Login";
import Modal from "../Reusable/Modal";
import Gallery from "./Gallery";
export default function Welcome() {
  const [loginMdl, setLoginMdl] = useState(false);

  return (
    <div className={cls.welocmeContainer}>
      <div>
        <h1 className={`${cls.heading} ${cls.text}`}>
          Enjoy your <br /> Favorite shows & Films <br /> with your dear ones
        </h1>
        <h4 className={`${cls.heading2} ${cls.text}`}>
          Watch virtually with your friends.
        </h4>
        <UiBtn1 onClick={() => setLoginMdl(true)} value="Get Started" />
      </div>
      <Gallery></Gallery>
      {loginMdl && (
        <Modal closeMdl={setLoginMdl}>
          <Login></Login>
        </Modal>
      )}
    </div>
  );
}
