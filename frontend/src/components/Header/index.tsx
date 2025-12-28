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
          <svg width="36" height="36" viewBox="0 0 90 90">
            <path
              fill={"#fff"}
              d="M45 0a45 45 0 1 1-.1 0Z"
            />
            <path
              fill="#000"
              d="M15 20c8 3 12 22 0 50 7-6 31-2 45 0 18 3 7-17 15-20-5 0-15-4-15 0 0 6 8 3 8 6 0 4-4 9-9 6-6-4-10-13-9-17 8 0 2-10 9-18 1 9 4 12 8 15s1-3 6-2c-9-6-1-23-18-20-13 3-25-7-40 0m35 43c-9-3-15-3-20-2 5-6-1-6 0-11 3 3 12 1 13-2 1 5 1 11 7 15m-7-20c-3-6-9-3-13-3 6-5-3-12 6-12s8 2 12 0c-3 5-5 8-5 15"
            />
          </svg>
          <span className="text-2xl font-bold tracking-widest text-white">
            ELITE{" "}
            <span className="text-cyber-blue" data-id="element-10">
              GAMES
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
