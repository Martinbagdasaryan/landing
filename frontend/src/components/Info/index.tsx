const Info = () => {
  return (
    <section className="py-24 bg-[#0a0a0a80] relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-obsidian-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold-400/30 transition-colors duration-300 group">
            <div className="w-14 h-14 rounded-lg bg-burgundy-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smartphone w-7 h-7 text-gold-400"
                aria-hidden="true"
                data-id="element-20"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
              Mobile-First Design
            </h3>
            <p className="text-gray-400 leading-relaxed" data-id="element-22">
              Every game is optimized for performance across all devices,
              delivering a seamless experience on mobile, tablet, and desktop.
            </p>
          </div>
          <div className="bg-obsidian-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold-400/30 transition-colors duration-300 group">
            <div className="w-14 h-14 rounded-lg bg-burgundy-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap w-7 h-7 text-gold-400"
                aria-hidden="true"
                data-id="element-20"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
              Intuitive And Fast
            </h3>
            <p className="text-gray-400 leading-relaxed" data-id="element-22">
              We place emphasis on speed and convenience in our games, ensuring
              smooth performance, fast interactions, and an intuitive experience
            </p>
          </div>{" "}
          <div className="bg-obsidian-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold-400/30 transition-colors duration-300 group">
            <div className="w-14 h-14 rounded-lg bg-burgundy-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="lucide lucide-globe rounded-full flex justify-center items-center font-[800] lucide lucide-shield text-gold-400 text-[18px]">
                A 文
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
              Languages We Support
            </h3>
            <p className="text-gray-400 leading-relaxed" data-id="element-22">
              We offer support for multiple languages to ensure a comfortable
              experience for all users 🇬🇧 🇹🇷 🇪🇸 🇷🇺 🇮🇷 🇦🇲 🇬🇪.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
