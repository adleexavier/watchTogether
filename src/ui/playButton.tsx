import React from "react";

export default function PlayButton() {
  return (
    <button className="absolute bottom-10 left-10 bg-white px-4 py-2 text-2xl text-bold rounded-lg transition duration-300 hover:bg-slate-900 hover:text-white hover:fill-white ">
      <span>Play</span>
      <svg
        className="inline fill-inherit"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M320-200v-560l440 280-440 280Z" />
      </svg>
    </button>
  );
}
