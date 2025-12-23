import { useNavigate } from "react-router-dom";

const Future = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-full flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-blue"></span>
          </span>
          <span className="text-cyber-blue text-sm font-semibold tracking-wider uppercase">
            Next Gen Gaming Protocol
          </span>
        </div>
        <h1
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          style={{ opacity: "1", transform: "none" }}
        >
          <span className="block text-white glitch-text" data-text="FUTURE OF">
            FUTURE OF
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-white to-cyber-purple drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            DIGITAL CASINO
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Experience the thrill of decentralized gaming with{" "}
          <span className="text-cyber-pink font-semibold">zero latency</span>{" "}
          and{" "}
          <span className="text-cyber-blue font-semibold">provably fair</span>{" "}
          algorithms. Welcome to the neon frontier.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => {
              navigate("/games");
            }}
            className="group relative px-8 py-4 bg-cyber-blue text-cyber-black font-bold text-lg tracking-wider uppercase clip-path-slant"
            style={{
              clipPath: `polygon(
                      10% 0px,
                      100% 0px,
                      100% 70%,
                      90% 100%,
                      0px 100%,
                      0px 30% 
                    )`,
            }}
          >
            <span className="flex items-center gap-2">
              View Games
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
                className="lucide lucide-play w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          <button
            className="group px-8 py-4 bg-transparent border border-cyber-purple text-cyber-purple font-bold text-lg tracking-wider uppercase hover:bg-cyber-purple/10 transition-colors"
            style={{
              clipPath: `polygon(
                      10% 0px,
                      100% 0px,
                      100% 70%,
                      90% 100%,
                      0px 100%,
                      0px 30%
                    )`,
              boxShadow: "rgba(188, 19, 254, 0.4) 0px 0px 0px",
              transform: "none",
            }}
          >
            <span className="flex items-center gap-2">
              Contact us
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
                className="lucide lucide-chevron-right w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 hidden lg:block opacity-20 pointer-events-none">
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
            className="lucide lucide-zap w-96 h-96 text-cyber-blue animate-pulse"
            aria-hidden="true"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Future;
