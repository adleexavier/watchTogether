import cls from "./Gallery.module.css";
import TVmodal from "../../ui/miniModals/TVmodal";
import { moviApi } from "./fetchMovies";
export default function Gallery() {
  return (
    <div className={cls.container}>
      <div className={cls.slider}>
        <ul className={cls.list}>
          {moviApi.map((item: string, i: number) => (
            <li>
              <TVmodal key={i} src={item}></TVmodal>
            </li>
          ))}
        </ul>
        <ul className={cls.list}>
          {moviApi.map((item: string, i: number) => (
            <li>
              <TVmodal key={i + 20} src={item}></TVmodal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
