import { cn } from "../../utils/helper";

interface IGamesCard {
  gameName: string;
  gameTamlet: string;
  index?: number;
  height?: string;
}

const colors = [
  "border-cyber-blue",
  "border-cyber-pink",
  "border-cyber-purple",
  "border-cyber-blue",
];
const bgColor = [
  "bg-cyber-blue",
  "bg-cyber-pink",
  "bg-cyber-purple",
  "bg-cyber-blue",
];

const GamesCard = ({ gameName, gameTamlet, index = 0, height }: IGamesCard) => {
  const border = colors[index % 4];
  const bg = bgColor[index % 4];
  return (
    <div
      className={cn(
        "group relative bg-cyber-gray/40 backdrop-blur-md border rounded-xl overflow-hidden cursor-pointer",
        border,
      )}
    >
      <div
        className={cn("relative h-64 overflow-hidden", height )}
        data-id="element-40"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent z-10"
          data-id="element-41"
        ></div>
        <img
          src={gameTamlet}
          alt="Neon Roulette"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>
      </div>
      <div
        className="absolute bottom-3 left-0 w-full p-6 z-20"
        data-id="element-44"
      >
        <h3
          className="text-2xl font-bold text-white group-hover:text-cyber-blue transition-colors"
          data-id="element-47"
        >
          {gameName}
        </h3>
      </div>
      <div
        className={cn(
          "absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 rounded-xl shadow-neon-blue",
          border,
        )}
      ></div>
      <div
        className="flex absolute bottom-0 z-10 w-full group-hover:translate-y-0  translate-y-[100px] "
        data-id="element-46"
      >
        <button
          className={cn(
            "relative overflow-hidden rounded-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-obsidian-900 tracking-wide uppercase text-sm text-obsidian-900 shadow-[0_0_15px_rgba(212,175,55,0.3)] px-4 py-2 flex-1",
            bg,
          )}
          tabIndex={0}
        >
          <div
            className="absolute inset-0 bg-white/20"
            data-id="element-109"
          ></div>
          <span
            className="relative z-10 flex items-center justify-center gap-2"
            data-id="element-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-play w-4 h-4 mr-2"
              aria-hidden="true"
              data-id="element-48"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            Demo
          </span>
        </button>
      </div>
    </div>
  );
};

export default GamesCard;
