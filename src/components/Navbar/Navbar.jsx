import { BiSearch } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';

import './navbar.css';

const Navbar = () => {
	return (
		<nav className='topNav'>
			<div className='navControls'>
				<div className='searchWrapper'>
					<input
						type='search'
						placeholder='Search...'
					/>
					<BiSearch />
				</div>
				<div className='dropDowns'>
					<div>
						<p>Relevance</p>
						<BsChevronDown />
					</div>
					<div>
						<p>All brands</p>
						<BsChevronDown />
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
