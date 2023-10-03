import { Navigate, Outlet } from "react-router-dom";

const pwd = "123";
export default function PrivateRoute() {
  return pwd ? <Outlet /> : <Navigate to={"/"} />;
}
