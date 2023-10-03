import React from "react";
import cls from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div className={cls.navBar}>
      <div className={cls.logoImage}>
        <img src="/logo.png" alt="" />
      </div>
      <ul className={cls.navBtnContainer}>
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">TV shows</a>
        </li>
        <li>
          <a href="">Trending</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
      </ul>
    </div>
  );
}
