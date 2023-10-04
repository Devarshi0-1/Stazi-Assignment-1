import { motion } from 'framer-motion';
import { GoPeople } from 'react-icons/go';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer } from 'react-icons/bs';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import './card.css';

const Card = ({
	i,
	carImgs,
	carName,
	carLaunchYear,
	carSeatingCapacity,
	carFuelType,
	carMilageKmPerLiter,
	carGearTransition,
	carRentPricePerMonthInUSD,
}) => {
	return (
		<motion.div
			className='card'
			initial={{ opacity: 0, translateX: -50, translateY: -50 }}
			animate={{
				opacity: 1,
				translateX: 0,
				translateY: 0,
			}}
			transition={{
				duration: 0.2,
				delay: i * 0.1,
			}}>
			<div className='card-top-img'>
				<img
					src={carImgs[0]}
					alt={carName}
				/>
			</div>
			<div className='card-mid-info'>
				<div className='card-car-name'>
					<h3>{carName}</h3>
					<div className='car-year-launch'>
						<p>{carLaunchYear}</p>
					</div>
				</div>
				<div className='card-stats'>
					<div className='stat'>
						<div className='icon'>
							<GoPeople />
						</div>
						<div className='text'>{carSeatingCapacity}</div>
					</div>
					<div className='stat'>
						<div className='icon'>
							<BiGasPump />
						</div>
						<div className='text'>{carFuelType}</div>
					</div>
					<div className='stat'>
						<div className='icon'>
							<BsSpeedometer />
						</div>
						<div className='text'>{carMilageKmPerLiter}km/1-liter</div>
					</div>
					<div className='stat'>
						<div className='icon'>
							<PiSteeringWheelBold />
						</div>
						<div className='text'>{carGearTransition}</div>
					</div>
				</div>
			</div>
			<div className='card-divider'></div>
			<div className='card-lower-cta'>
				<div className='price'>
					<p>
						${carRentPricePerMonthInUSD} <span>/month</span>
					</p>
				</div>
				<div className='cta'>
					<div className='addToFav'>
						<AiOutlineHeart />
					</div>
					<button className='cta-btn'>Rent Now</button>
				</div>
			</div>
		</motion.div>
	);
};
export default Card;
