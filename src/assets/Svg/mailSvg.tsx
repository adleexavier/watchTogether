import React from "react";
export interface propsType {
  active: boolean;
}
export const state = {
  color: "rgba(60,60,60,1)",
  colorActive: "rgba(255, 91, 91, 1)",
};

export default function MailSvg(props: propsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"
        fill={props.active ? state.colorActive : state.color}
      />
    </svg>
  );
}
