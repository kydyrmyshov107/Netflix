import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import First from "../pages/homeSections/first/First";
import scss from "./Layout.module.scss";
import Wrapper from "../pages/homeSections/wrapper/Wrapper";

const Layout = () => {
  const location = useLocation();

  const isFirst = location.pathname === "/";
  return (
    <div className={scss.Layout}>
      {!isFirst && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/home" element={<Wrapper />} />
        </Routes>
      </main>
      {!isFirst && <Footer />}
    </div>
  );
};

export default Layout;
