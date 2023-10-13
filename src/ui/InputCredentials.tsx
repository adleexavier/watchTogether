import { useRef, useState, useEffect } from "react";
import ProfileSvg from "../assets/Svg/ProfileSvg";
import PwdSvg from "../assets/Svg/PwdSvg";

interface InputPropsType {
  type: "mail" | "user" | "pwd";
  sendDataToLogin: React.Dispatch<
    React.SetStateAction<{
      name: string;
      password: string;
    }>
  >;
}

export default function InputCredentials(props: InputPropsType) {
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
      className="box-border relative flex bg-bl1 px-[4px] py-[3px] rounded-md mt-4"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div
        className={`${
          active ? "-translate-x-12" : "translate-x-0"
        } absolute top-[5px] transition-all duration-700`}
      >
        {props.type === "user" && <ProfileSvg active={active} />}
        {props.type === "pwd" && <PwdSvg active={active} />}
      </div>

      <input
        size={14}
        className="outline-none p-2 text-white text-2xl bg-inherit min-w-0"
        type={props.type === "pwd" ? "password" : "text"}
        ref={inputRef}
      />
    </div>
  );
}
