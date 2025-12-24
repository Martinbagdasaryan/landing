import GamesCard from "../GamesCard";

const fovoritGame = [
  {
    gameName: "Neon Roulette",
    gameTamlet:
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
  },
  {
    gameName: "Cyber Slots",
    gameTamlet:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
  },
  {
    gameName: "Virtual Poker",
    gameTamlet:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
  },
  {
    gameName: "Jackpot Arena",
    gameTamlet:
      "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?auto=format&amp;fit=crop&amp;q=80&amp;w=800",
  },
];

const GameInAboutUs = () => {
  return (
    <section className="py-20 px-4 relative z-10" data-id="element-32">
      <div className="max-w-7xl mx-auto" data-id="element-33">
        <div
          className="flex items-center justify-between mb-12"
        >
          <h2
            className="text-4xl font-bold text-white tracking-wider max-sm:text-[28px]"
          >
            TRENDING
            <span className="text-cyber-pink" data-id="element-36">
              GAMES
            </span>
          </h2>
          <div
            className="h-px flex-1 bg-gradient-to-r from-cyber-pink/50 to-transparent ml-8"
          ></div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fovoritGame.map((game, index) => (
            <GamesCard
              gameName={game.gameName}
              gameTamlet={game.gameTamlet}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default GameInAboutUs;
