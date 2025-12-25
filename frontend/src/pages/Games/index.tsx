import GamesCard from "../../components/GamesCard";
import { fovoritGame } from "../../utils/helper";

const Games = () => {
  return (
    <div>
      <section className="py-20 px-4 relative z-10" data-id="element-32">
        <div className="max-w-7xl mx-auto" data-id="element-33">
          <div
            className="flex items-center justify-between mb-12"
            data-id="element-34"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2
              className="text-4xl font-bold text-white tracking-wider"
              data-id="element-35"
            >
              ALL{" "}
              <span className="text-cyber-pink" data-id="element-36">
                GAMES
              </span>
            </h2>
            <div
              className="h-px flex-1 bg-gradient-to-r from-cyber-pink/50 to-transparent ml-8"
              data-id="element-37"
            ></div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-id="element-38"
          >
            {fovoritGame.map((game, index) => (
              <GamesCard
                key={index}
                gameName={game.gameName}
                gameTamlet={game.gameTamlet}
                index={index}
                getWayURL={game.gamesURL}
                height={"h-72"}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
