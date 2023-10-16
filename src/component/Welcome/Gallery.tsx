import { useEffect, useState } from "react";
import TVmodal from "../../ui/miniModals/TVmodal";
export default function Gallery() {
  const [moviApi, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData]);
  return (
    <div className="w-full h-[400px] overflow-hidden relative overlay">
      <div className="animate-scrollGal">
        <ul className="columns-2 gap-x-2">
          {moviApi.map((item: string, i: number) => (
            <li className="mb-[2px]">
              <TVmodal key={i} src={item}></TVmodal>
            </li>
          ))}
        </ul>
        <ul className="columns-2 gap-x-2">
          {moviApi.map((item: string, i: number) => (
            <li className="mb-[2px]">
              <TVmodal key={i} src={item}></TVmodal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
