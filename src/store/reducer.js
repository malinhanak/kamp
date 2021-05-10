import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import 'firebase/firestore';

export const initialState = {
	someInitialState: null,
};

const app = (state = initialState, action) => {
	switch (action.type) {
		// case 'SOME_FUN_ACTION':
		// 	return {
		// 		...state,
		// 		someFunAction: action.payload,
		// 	};
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
