export function Loading() {
  const ringElements: JSX.Element[] = Array.from({ length: 2 }, (_, i) => (
    <div
      key={i}
      className={` w-[200px] h-[200px] rounded-full absolute border-b-8 odd:border-red-600 even:border-white animate-ring${
        i + 1
      }`}
    ></div>
  ));
  return (
    <div className="w-full h-screen relative flex justify-center items-center bg-bl1">
      {ringElements}
      <div className="w-[200px] h-[200px] flex justify-center items-center rounded-full">
        <img className="w-1/2" src="/logo.png" alt="" />
      </div>
    </div>
  );
}
