interface propsType {
  src: string;
}
export default function TVmodal(props: propsType) {
  return (
    <div className="w-full space-y-4 rounded-[10px] overflow-hidden">
      <img className="w-full" src={props.src} alt="sdf" />
    </div>
  );
}
