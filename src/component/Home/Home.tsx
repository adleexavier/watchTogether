import React, { useState } from "react";
import NavBar from "../NavBar";
import cls from "./Home.module.css";
import Post from "./Post";
import Post2 from "./Post2";
export const data = ["Data ", "Data2 "];

export default function Home() {
  const [state, setState] = useState(<Post />);

  return (
    <div>
      <NavBar></NavBar>
      <h1 className={cls.sectionHeading}> #Trending </h1>
      <button onClick={() => data.push("Server push")}>push to Server</button>
      <div></div>
      <button onClick={() => setState(<Post />)}>Post 1</button>
      <button onClick={() => setState(<Post2 />)}>Post 2</button>

      {state}
    </div>
  );
}
