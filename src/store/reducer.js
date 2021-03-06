import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import 'firebase/firestore';

export const initialState = {
	selectedGame: null,
	gameInputValue: '0',
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECTED_GAME':
			return {
				...state,
				selectedGame: action.payload,
			};

		case 'ADD_POINTS':
			return {
				...state,
				gameInputValue: action.payload,
			};
		default:
			return state;
	}
};

export const rootReducer = (history) =>
	combineReducers({
		app,
		router: connectRouter(history),
		firebase: firebaseReducer,
		firestore: firestoreReducer,
	});
