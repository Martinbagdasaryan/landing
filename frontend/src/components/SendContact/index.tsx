import { useDispatch } from 'react-redux';
import { setIsOpenContactPopup } from '../../redux/selectors/settings';

const SendContact = () => {
	const dispatch = useDispatch();

	return (
		<section className='py-20 text-center relative overflow-hidden z-0' data-id='element-19'>
			<div className='absolute inset-0 bg-gradient-to-t from-cyber-purple/20 to-transparent pointer-events-none' data-id='element-20'></div>
			<div className='max-w-4xl mx-auto px-4 relative z-10' data-id='element-21'>
				<h2 className='text-4xl md:text-6xl font-bold mb-8' data-id='element-22'>
					BECOME OUR PARTNER{' '}
					<span className='text-cyber-pink' data-id='element-23'>
						NOW
					</span>
				</h2>
				<p className='text-gray-400 mb-10 max-w-2xl mx-auto text-lg' data-id='element-24'>
					Click ‘Get in Touch’ and take your first step toward partnership.
				</p>
				<button onClick={() => dispatch(setIsOpenContactPopup(true))} className='px-12 py-5 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white font-bold text-xl rounded-full shadow-neon-pink hover:scale-105 transition-transform duration-300' data-id='element-25'>
					GET IN TOUCH
				</button>
			</div>
		</section>
	);
};

export default SendContact;
