import React from "react";
import cls from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className={cls.navBar}>
      <div className={cls.logoImage}>
        <img src="/logo.png" alt="" />
      </div>
      <ul className={cls.navBtnContainer}>
        <li>
          <Link to="">Movies</Link>
        </li>
        <li>
          <Link to="">TV shows</Link>
        </li>
        <li>
          <Link to="">Trending</Link>
        </li>
        <li>
          <Link to="">Pricing</Link>
        </li>
      </ul>
    </div>
  );
}
