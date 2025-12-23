import Future from "../../components/Future";
import GameInAboutUs from "../../components/GameInAboutUs";
import Info from "../../components/Info";
import SendContact from "../../components/SendContact";
import Services from "../../components/Servicis";

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      <Future />
      <Services />
      <Info />
      <GameInAboutUs />
      <SendContact />
    </div>
  );
};
export default AboutUs;
