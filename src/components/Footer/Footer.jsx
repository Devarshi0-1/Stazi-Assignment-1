import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import './footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams({});

	const dispatch = useDispatch();

	const { cardsPerPage, currentPage, totalCards } = useSelector(
		(state) => state.cardsReducer
	);

	const indexOfLastCard = currentPage * cardsPerPage;

	const pageNumbers = [];

	for (let index = 1; index <= Math.ceil(totalCards / cardsPerPage); index++) {
		pageNumbers.push(index);
	}

	useEffect(() => {
		if (searchParams.get('page'))
			dispatch({
				type: 'setPageTo',
				payload: Number(searchParams.get('page')),
			});
	}, []);

	useEffect(() => {
		setSearchParams({ page: currentPage });
	}, [currentPage]);

	return (
		<footer className='footer'>
			<div className='footer-left'>
				<div className='footer-currentPage'>
					<p>
						{indexOfLastCard} from {totalCards}
					</p>
				</div>
			</div>
			<div className='footer-right'>
				<button
					className='paginationBtn'
					onClick={() => {
						dispatch({ type: 'decrementPage' });
					}}>
					<BsArrowLeft />
				</button>
				{pageNumbers.length > 6 && !isExpanded ? (
					<>
						{pageNumbers.splice(0, 4).map((num) => (
							<button
								key={num}
								className={`paginationBtn ${
									currentPage === num ? 'activePage' : ''
								}`}
								onClick={() => {
									dispatch({ type: 'setPageTo', payload: num });
								}}>
								{num}
							</button>
						))}
						<button
							className='paginationBtn'
							onClick={() => setIsExpanded(true)}>
							...
						</button>
						{pageNumbers.splice(-2).map((num) => (
							<button
								key={num}
								className={`paginationBtn ${
									currentPage === num ? 'activePage' : ''
								}`}
								onClick={() => dispatch({ type: 'setPageTo', payload: num })}>
								{num}
							</button>
						))}
					</>
				) : (
					<>
						{pageNumbers.map((num) => (
							<button
								key={num}
								className={`paginationBtn ${
									currentPage === num ? 'activePage' : ''
								}`}
								onClick={() => dispatch({ type: 'setPageTo', payload: num })}>
								{num}
							</button>
						))}
					</>
				)}

				<button
					className='paginationBtn'
					onClick={() => {
						dispatch({ type: 'incrementPage' });
					}}>
					<BsArrowRight />
				</button>
			</div>
		</footer>
	);
};
export default Footer;
