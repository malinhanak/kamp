import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Route, useHistory, useRouteMatch, withRouter } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import { UserIsAuthenticated } from './ProtectedRoute';
import { Link } from 'react-router-dom';

export function Games() {
	const auth = useSelector(authSelector);
	const history = useHistory();
	const firebase = useFirebase();
	const match = useRouteMatch();

	useFirestoreConnect([
		{
			collection: 'games',
			where: [
				['ownerId', '==', auth.uid],
				['active', '==', true],
			],
		},
	]);

	const games = useSelector((state) => state.firestore.ordered.games);

	function signOut() {
		firebase.logout().then(() => history.push('/'));
	}

	return (
		<>
			<button
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				Logga ut
			</button>
			{games?.map((game) => {
				return (
					<h3 key={game.id}>
						<Link to={`${match.url}/${game.id}`}>{game.name}</Link>
					</h3>
				);
			})}

			<Route path={`${match.path}/:gameID`}>one game</Route>
		</>
	);
}
export default withRouter(UserIsAuthenticated(Games));
