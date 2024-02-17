import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Main } from "../pages/Main";
import { Login } from "../pages/Login";
import About from "../pages/About";

export const useRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />      */}
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />

      <Route element={<PrivateRoute />}></Route>
    </Routes>
  );
};

export default useRoutes;
