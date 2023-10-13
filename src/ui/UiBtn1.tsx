interface propsType {
  onClick?: () => void;
  value: string;
}
export default function UiBtn1(props: propsType) {
  return (
    <button
      onClick={props.onClick}
      className="rounded-[5px] px-8 py-4 text-2xl tracking-wide font-semibold cursor-pointer bg-btn1 transition transform hover:scale-110  ease-in-out hover:bg-bl1  duration-300"
    >
      {props.value}
    </button>
  );
}
