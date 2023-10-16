import React from "react";
import NavBar from "../NavBar";
import Trending from "./Trending";
import Featured from "./Featured";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <NavBar></NavBar>
      <Featured />
      <Trending></Trending>
    </div>
  );
}
