import React from "react";
import NavBar from "../NavBar";
import cls from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className={cls.sectionHeading}> #Trending </h1>
    </div>
  );
}
