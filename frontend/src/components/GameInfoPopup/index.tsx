import { useDispatch, useSelector } from 'react-redux';
import { selectSettings } from '../../redux/selector';
import { setOpenInfoGamePopup } from '../../redux/selectors/settings';
import axios from 'axios';

const GameInfoPopup = () => {
	const { openInfoGamePopup } = useSelector(selectSettings);
	const dispatch = useDispatch();

	const getGameUrl = async (getWayURL: string) => {
		const gameUrl: { data: string } = await axios.post(getWayURL);
		if (gameUrl.data) {
			window.open(gameUrl.data, '_blank', 'noopener,noreferrer');
		}
	};

	if (!openInfoGamePopup) return null;

	return (
		<div className='fixed w-full h-full top-0 left-0 z-40 justify-center items-center bg-black/90 flex'>
			<div className='w-full md:w-[500px] h-fit boarder rounded-xl bg-[#0e0e0e] text-white'>
				<div className='w-full p-6'>
					<div className='mb-6 flex items-start justify-between'>
						<div>
							<h2 className='text-xl font-semibold text-white'>{openInfoGamePopup?.gameName}</h2>
						</div>

						<button onClick={() => dispatch(setOpenInfoGamePopup(null))} className='text-zinc-400 hover:text-white'>
							✕
						</button>
					</div>

					<div className='space-y-4 flex flex-col gap-2 w-full'>
						<p className='mt-1 text-sm text-zinc-400 font-medium'>{openInfoGamePopup?.gameInfo.text}</p>
						<div className='mt-2 flex gap-2 justify-center'>
							<div className='w-1/2 p-2 border border-white/5 rounded-xl flex justify-center items-center'>
								<p className='text-xs text-zinc-400'>Players Type: {openInfoGamePopup?.gameInfo.playersType}</p>
							</div>
							<div className='w-1/2 p-2 border border-white/5 rounded-xl flex justify-center items-center'>
								<p className='text-xs text-zinc-400'>RTP: {openInfoGamePopup?.gameInfo.rtp}</p>
							</div>
						</div>
						<button
							onClick={() => {
								getGameUrl(openInfoGamePopup.gamesURL);
							}}
							className='w-full hover:bg-cyber-gray/40 hover:border-gold-400/30 p-2 border border-white/5 rounded-xl flex justify-center items-center text-zinc-400'
						>
							Demo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameInfoPopup;
