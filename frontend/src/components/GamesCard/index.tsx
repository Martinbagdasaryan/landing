import axios from 'axios';
import { setOpenInfoGamePopup } from '../../redux/selectors/settings';
import { useDispatch } from 'react-redux';
import { cn, type IfovoritGame } from '../../utils/helper';

interface IGamesCard {
	game: IfovoritGame;
	index?: number;
	height?: string;
}

const colors = ['border-cyber-blue', 'border-cyber-pink', 'border-cyber-purple', 'border-cyber-blue'];
const bgColor = ['bg-cyber-blue', 'bg-cyber-pink', 'bg-cyber-purple', 'bg-cyber-blue'];

const GamesCard = ({ game, index = 0, height }: IGamesCard) => {
	const { gamesURL, gameTamlet, gameName } = game;
	const border = colors[index % 4];
	const bg = bgColor[index % 4];
	const dispatch = useDispatch();

	const getGameUrl = async (getWayURL: string) => {
		const gameUrl: { data: string } = await axios.post(getWayURL);
		if (gameUrl.data) {
			window.open(gameUrl.data, '_blank', 'noopener');
			window.location.href = gameUrl.data;
		}
	};

	return (
		<div className={cn('group relative bg-cyber-gray/40 backdrop-blur-md border rounded-xl overflow-hidden cursor-pointer', border)}>
			<div className={cn('relative h-64 overflow-hidden', height)}>
				<div className='absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent z-10' data-id='element-41'></div>
				<img src={gameTamlet} alt='Neon Roulette' className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity' />
				<div className='absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20'></div>
			</div>
			<div className='absolute bottom-9 left-0 w-full px-6 z-20' data-id='element-44'>
				<h3 className='text-2xl font-bold text-white group-hover:text-cyber-blue transition-colors' data-id='element-47'>
					{gameName}
				</h3>
			</div>
			<div className={cn('absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 rounded-xl shadow-neon-blue', border)}></div>
			<div className={cn('flex absolute bottom-0 z-10 w-full group-hover:translate-y-0  translate-y-[100px]', bg)} data-id='element-46'>
				<div
					onClick={() => {
						getGameUrl(gamesURL);
					}}
					className={cn('relative w-[calc(100%_-_40px)] overflow-hidden rounded-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 tracking-wide uppercase text-sm text-obsidian-900 shadow-[0_0_15px_rgba(212,175,55,0.3)] px-4 py-2 flex-1', bg)}
				>
					<div className='absolute inset-0 bg-white/20' data-id='element-109'></div>
					<span className='relative z-10 flex items-center justify-center gap-2' data-id='element-110'>
						<img src='/icons/play-transparent.svg' alt='' />
						Demo
					</span>
				</div>

				<button
					onClick={() => {
						dispatch(setOpenInfoGamePopup(game));
					}}
					className='relative overflow-hidden rounded-sm font-bold py-2 w-12 text-black border-l border-black'
					data-id='element-108'
				>
					<span className='relative z-10 flex items-center justify-center gap-2' data-id='element-110'>
						<img src='/icons/info.svg' alt='' />
					</span>
				</button>
			</div>
		</div>
	);
};

export default GamesCard;
