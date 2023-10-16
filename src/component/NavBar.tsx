import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="sticky w-full bg-slate-900 outline-none text-2xl pb-1 flex items-center gap-8">
      <div className="mx-[10px] my-[5px] w-14">
        <img className="w-full" src="/logo.png" alt="" />
      </div>
      <ul className=" flex gap-8 text-white">
        <li className="  hover:underline hover:underline-offset-4">
          <Link to="">Movies</Link>
        </li>
        <li className="  hover:underline hover:underline-offset-4">
          <Link to="">TV shows</Link>
        </li>
        <li className="  hover:underline hover:underline-offset-4">
          <Link to="">Trending</Link>
        </li>
        <li className="  hover:underline hover:underline-offset-4">
          <Link to="">Pricing</Link>
        </li>
      </ul>
    </div>
  );
}
