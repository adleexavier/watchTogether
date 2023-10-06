import cls from "./Welcome.module.css";
import UiBtn1 from "../../ui/UiBtn1";
import { useState } from "react";
import Login from "../Auth/Login";
import Modal from "../Reusable/Modal";
import Gallery from "./Gallery";
import { Outlet, useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className={cls.welocmeContainer}>
      <div>
        <h1 className={`${cls.heading} ${cls.text}`}>
          Enjoy your <br /> Favorite shows & Films <br /> with your dear ones
        </h1>
        <h4 className={`${cls.heading2} ${cls.text}`}>
          Watch virtually with your friends.
        </h4>
        <UiBtn1 onClick={() => navigate("/login/")} value="Get Started" />
      </div>
      <Gallery></Gallery>
      <Outlet></Outlet>
    </div>
  );
}
