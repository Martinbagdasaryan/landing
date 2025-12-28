import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";
import PopupGameInfo from "../../components/PopupGameInfo";

const Layout = () => {
  return (
    <div className="w-full h-full bg-black relative">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <Popup />
      <PopupGameInfo />
    </div>
  );
};

export default Layout;
