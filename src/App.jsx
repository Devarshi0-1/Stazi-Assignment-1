import Navbar from './components/Navbar/Navbar';
import CardWrapper from './components/CardWrapper/CardWrapper';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './store';
import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<CardWrapper />}
				/>
			</Routes>
			<Footer />
		</Provider>
	);
};

export default App;
