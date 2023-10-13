import TVmodal from "../../ui/miniModals/TVmodal";
import { moviApi } from "./fetchMovies";
export default function Gallery() {
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
