import { configureStore, createReducer } from '@reduxjs/toolkit';
import CarInfo from './db.json';

const initialState = {
	currentPage: 1,
	cardsPerPage: 6,
	CarInfo,
	totalCards: CarInfo.length,
};

const cardsReducer = createReducer(initialState, {
	incrementPage: (state) => {
		if (state.currentPage < state.totalCards / state.cardsPerPage)
			state.currentPage += 1;
	},
	decrementPage: (state) => {
		if (state.currentPage > 1) state.currentPage -= 1;
	},
	setPageTo: (state, action) => {
		state.currentPage = action.payload;
	},
});

const store = configureStore({
	reducer: { cardsReducer },
});

export default store;
