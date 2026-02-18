const Info = () => {
	return (
		<section className='py-24 bg-[#0a0a0a80] relative overflow-hidden'>
			<div className='container mx-auto relative z-10 max-w-7xl'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='bg-obsidian-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold-400/30 transition-colors duration-300 group'>
						<div className='w-14 h-14 rounded-lg bg-burgundy-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
							<img src='/icons/mobile.svg' alt='' />
						</div>
						<h3 className='text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300'>Mobile-First Design</h3>
						<p className='text-gray-400 leading-relaxed' data-id='element-22'>
							Every game is optimized for performance across all devices, delivering a seamless experience on mobile, tablet, and desktop.
						</p>
					</div>
					<div className='bg-obsidian-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold-400/30 transition-colors duration-300 group'>
						<div className='w-14 h-14 rounded-lg bg-burgundy-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
							<img src='/icons/flash.svg' alt='' className='w-7 h-7' />
						</div>
						<h3 className='text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300'>Intuitive And Fast</h3>
						<p className='text-gray-400 leading-relaxed' data-id='element-22'>
							We place emphasis on speed and convenience in our games, ensuring smooth performance, fast interactions, and an intuitive experience
						</p>
					</div>{' '}
					<div className='bg-obsidian-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold-400/30 transition-colors duration-300 group'>
						<div className='w-14 h-14 rounded-lg bg-burgundy-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
							<span className='lucide lucide-globe rounded-full flex justify-center items-center font-[800] lucide lucide-shield text-gold-400 text-[18px]'>A 文</span>
						</div>
						<h3 className='text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300'>Languages We Support</h3>
						<p className='text-gray-400 leading-relaxed' data-id='element-22'>
							We offer support for multiple languages to ensure a comfortable experience for all users 🇬🇧 🇹🇷 🇪🇸 🇷🇺 🇮🇷 🇦🇲 🇬🇪.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
