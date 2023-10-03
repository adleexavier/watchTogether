import { useRef, useState, useEffect } from "react";
import ProfileSvg from "../assets/Svg/ProfileSvg";
import PwdSvg from "../assets/Svg/PwdSvg";
import cls from "./InputCredential.module.css";

interface propsType {
  type: "mail" | "user" | "pwd";
  sendDataToLogin: React.Dispatch<
    React.SetStateAction<{
      name: string;
      password: string;
    }>
  >;
}

export default function InputCredentials(props: propsType) {
  const [active, setActive] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isFocus || inputRef.current!.value ? setActive(true) : setActive(false);
    //Form validation;

    //Sent to login
    if (!isFocus && inputRef.current!.value) {
      props.sendDataToLogin((prev) => {
        if (props.type === "pwd") {
          return { ...prev, password: inputRef.current!.value };
        } else if (props.type === "user") {
          return { ...prev, name: inputRef.current!.value };
        } else {
          return prev;
        }
      });
    }
  }, [isFocus, inputRef.current]);

  return (
    <div
      className={cls.inputCredential}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div
        className={`${active ? cls.active : cls.notActive} ${cls.svgContainer}`}
      >
        {props.type === "user" && <ProfileSvg active={active} />}
        {props.type === "pwd" && <PwdSvg active={active} />}
      </div>

      <input
        className={cls.inputText}
        type={props.type === "pwd" ? "password" : "text"}
        ref={inputRef}
      />
      <span className={`${cls.borderFiller} ${active && cls.bFActive}`}></span>
    </div>
  );
}
