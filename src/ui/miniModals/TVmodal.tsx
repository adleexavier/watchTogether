import cls from "./TVmodal.module.css";

interface propsType {
  src: string;
}
export default function TVmodal(props: propsType) {
  return (
    <div className={cls.tv}>
      <img src={props.src} alt="sdf" />
    </div>
  );
}
