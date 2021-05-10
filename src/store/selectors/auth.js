import { isEmpty, isLoaded } from 'react-redux-firebase';
import { createSelector } from 'reselect';

export const auth = (state) => state.firebase.auth;
export const profile = (state) => state.firebase.profile;
export const isLoggedInSelector = createSelector(auth, (auth) => isLoaded(auth) && !isEmpty(auth));
