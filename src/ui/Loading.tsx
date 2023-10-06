import React from "react";
import cls from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={cls.container}>
      <div className={cls.ring}></div>
      <div className={cls.ring}></div>
      <div className={cls.ring}></div>
      <div className={cls.imgContainer}>
        <img src="/logo.png" alt="" />
      </div>
    </div>
  );
}
