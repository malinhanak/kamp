import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { createBrowserHistory } from 'history';
import { LoadingComponent } from 'components/ui-components/LoadingComponents';

const locationHelper = locationHelperBuilder({});
const browserHistory = createBrowserHistory();

export const UserIsAuthenticated = connectedRouterRedirect({
	wrapperDisplayName: 'UserIsAuthenticated',
	AuthenticatingComponent: LoadingComponent,
	allowRedirectBack: false,
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/login',
	authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
		!auth.isLoaded || isInitializing === true,
	authenticatedSelector: ({ firebase: { auth } }) => auth.isLoaded && !auth.isEmpty,
	redirectAction: (newLoc) => (dispatch) => {
		browserHistory.replace(newLoc);
		dispatch({ type: 'UNAUTHED_REDIRECT' });
	},
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
	wrapperDisplayName: 'UserIsNotAuthenticated',
	AuthenticatingComponent: LoadingComponent,
	allowRedirectBack: false,
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/games',
	authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
		!auth.isLoaded || isInitializing === true,
	authenticatedSelector: ({ firebase: { auth } }) => auth.isLoaded && auth.isEmpty,
	redirectAction: (newLoc) => (dispatch) => {
		browserHistory.replace(newLoc);
		dispatch({ type: 'UNAUTHED_REDIRECT' });
	},
});
// const timestamp = state.firebase.auth.createdAt;
// const newUserTime = add(new Date(timestamp), { hours: 1 });
// const hasPastNewUserTimePassed = new Date() <= newUserTime;
// if (hasPastNewUserTimePassed) {
// 	return locationHelper.getRedirectQueryParam(ownProps) || '/new-player';
// }
