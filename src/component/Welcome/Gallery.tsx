import cls from "./Gallery.module.css";
import TVmodal from "../../ui/miniModals/TVmodal";
import { moviApi } from "./fetchMovies";
export default function Gallery() {
  return (
    <div className={cls.container}>
      <div className={cls.slider}>
        <ul className={cls.list}>
          {moviApi.map((item: string) => (
            <li>
              <TVmodal src={item}></TVmodal>
            </li>
          ))}
        </ul>
        <ul className={cls.list}>
          {moviApi.map((item: string) => (
            <li>
              <TVmodal src={item}></TVmodal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
