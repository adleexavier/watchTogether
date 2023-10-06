import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome/Welcome";
import Home from "./component/Home/Home";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
