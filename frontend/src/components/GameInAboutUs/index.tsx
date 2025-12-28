import { fovoritGame } from "../../utils/data";
import GamesCard from "../GamesCard";

const GameInAboutUs = () => {
  return (
    <section className="py-20 px-4 relative z-10" data-id="element-32">
      <div className="max-w-7xl mx-auto" data-id="element-33">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white tracking-wider max-sm:text-[28px]">
            TRENDING{" "}
            <span className="text-cyber-pink" data-id="element-36">
              GAMES
            </span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-cyber-pink/50 to-transparent ml-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fovoritGame.slice(0, 4).map((game, index) => (
            <GamesCard
              key={index}
              game={game}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default GameInAboutUs;
