import React from "react";

interface propsType {
  img: string;
}

export default function ProfileButton(props: propsType) {
  return (
    <button>
      <img src={props.img} alt="profile" />
    </button>
  );
}
