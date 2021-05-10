import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { createBrowserHistory } from 'history';
// import LoadingScreen from 'components/LoadingScreen'; // change it to your custom component

const locationHelper = locationHelperBuilder({});
const browserHistory = createBrowserHistory();

const LoadingScreen = () => <div>Loading</div>;

export const UserIsAuthenticated = connectedRouterRedirect({
	wrapperDisplayName: 'UserIsAuthenticated',
	AuthenticatingComponent: LoadingScreen,
	allowRedirectBack: false,
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
	authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
		!auth.isLoaded || isInitializing === true,
	authenticatedSelector: ({ firebase: { auth } }) => auth.isLoaded && !auth.isEmpty,
	redirectAction: (newLoc) => (dispatch) => {
		browserHistory.replace(newLoc);
		dispatch({ type: 'UNAUTHED_REDIRECT' });
	},
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
	wrapperDisplayName: 'UserIsNotAuthenticated',
	AuthenticatingComponent: LoadingScreen,
	allowRedirectBack: false,
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/games',
	authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
		!auth.isLoaded || isInitializing === true,
	authenticatedSelector: ({ firebase: { auth } }) => auth.isLoaded && auth.isEmpty,
	redirectAction: (newLoc) => (dispatch) => {
		browserHistory.replace(newLoc); // or routerActions.replace
		dispatch({ type: 'UNAUTHED_REDIRECT' });
	},
});
