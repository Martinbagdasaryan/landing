import Features from '../../components/features';
import GameInAboutUs from '../../components/GameGallery';
import Info from '../../components/Info';
import SendContact from '../../components/SendContact';
import Services from '../../components/Services';

const AboutUs = () => {
	return (
		<div className='w-full h-full'>
			<Features />
			<Services />
			<Info />
			<GameInAboutUs />
			<SendContact />
		</div>
	);
};
export default AboutUs;
