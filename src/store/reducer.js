import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import 'firebase/firestore';

export const initialState = {
	isNewUser: false,
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case 'IS_NEW_USER':
			return {
				...state,
				isNewUser: action.payload,
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
