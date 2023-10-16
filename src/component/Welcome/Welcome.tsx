import UiBtn1 from "../../ui/UiBtn1";
import Gallery from "./Gallery";
import { Outlet, useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen px-40 text-white bg-wl bg-no-repeat bg-center bg-cover grid grid-cols-gall justify-between items-center ">
      <div>
        <h1 className="text-[55px] font-bold my-12 leading-[60px]">
          Enjoy your <br /> Favorite shows & Films <br /> with your dear ones
        </h1>
        <h4 className="text-[25px] leading[30px] font-semibold my-12">
          Watch virtually with your friends.
        </h4>
        <UiBtn1 onClick={() => navigate("/login/")} value="Get Started" />
      </div>
      <Gallery></Gallery>
      <Outlet></Outlet>
    </div>
  );
}
