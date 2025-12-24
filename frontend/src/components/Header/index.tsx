import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { setIsOpenContactPopup } from "../../redux/selects/settings";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isGames = location.pathname === "/games";

  return (
    <>
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-cyber-black/80 backdrop-blur-md border-b border-white/5">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer flex items-center gap-2"
          data-id="element-6"
        >
          <div className="w-8 h-8 bg-cyber-blue rounded-sm rotate-45 flex items-center justify-center shadow-neon-blue">
            <span className="text-cyber-black font-bold -rotate-45">C</span>
          </div>
          <span className="text-2xl font-bold tracking-widest text-white">
            CYBER
            <span className="text-cyber-blue" data-id="element-10">
              BET
            </span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-gray-400">
          <button
            onClick={() => {
              navigate("/");
            }}
            className={cn("hover:text-cyber-blue transition-colors", {
              "text-cyber-blue": isHome,
            })}
          >
            About us
          </button>
          <button
            onClick={() => {
              navigate("/games");
            }}
            className={cn("hover:text-cyber-pink transition-colors", {
              "text-cyber-pink": isGames,
            })}
          >
            Our Games
          </button>
          {/* <button className="hover:text-cyber-purple transition-colors">
            VIP
          </button> */}
          <button
            onClick={() => {
              dispatch(setIsOpenContactPopup(true));
            }}
            className="px-6 py-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 uppercase text-xs tracking-widest font-bold clip-path-slant"
          >
            Contact us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
