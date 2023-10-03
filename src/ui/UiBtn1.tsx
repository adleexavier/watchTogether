import cls from "./UiBtn1.module.css";

interface propsType {
  onClick?: () => void;
  value: string;
}
export default function UiBtn1(props: propsType) {
  return (
    <button onClick={props.onClick} className={cls.btn}>
      {props.value}
    </button>
  );
}
