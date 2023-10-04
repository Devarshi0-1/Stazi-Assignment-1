import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './cardWrapper.css';

const CardWrapper = () => {
	const { currentPage, cardsPerPage, CarInfo } = useSelector(
		(state) => state.cardsReducer
	);

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentCard = CarInfo.slice(indexOfFirstCard, indexOfLastCard);

	return (
		<div className='cardWrapper'>
			{CarInfo &&
				currentCard.map((card, index) => (
					<Card
						key={card.id}
						i={index}
						carImgs={card.img}
						carName={card.name}
						carLaunchYear={card.launch_year}
						carSeatingCapacity={card.seating_capacity}
						carFuelType={card.fuel_type}
						carMilageKmPerLiter={card.milage_km_per_liter}
						carGearTransition={card.gear_transition_type}
						carRentPricePerMonthInUSD={card.rent_price_per_month_in_usd}
					/>
				))}
		</div>
	);
};
export default CardWrapper;
