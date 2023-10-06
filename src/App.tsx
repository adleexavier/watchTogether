import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome/Welcome";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import PageNotFound from "./component/PageNotFound";
import Login from "./component/Auth/Login";
import { Suspense, lazy } from "react";
import Loading from "./ui/Loading";
const Home = lazy(() => import("./component/Home/Home"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Welcome />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="home" element={<Home />} />
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
