import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import First from "../pages/first/First";
import scss from "./Layout.module.scss";

const Layout = () => {
  const location = useLocation();

  const isFirst = location.pathname === "/";
  return (
    <div className={scss.Layout}>
      {!isFirst && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<First />} />
        </Routes>
      </main>
      {!isFirst && <Footer />}
    </div>
  );
};

export default Layout;
