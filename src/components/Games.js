import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import { store } from 'store/store';

const Games = () => {
	const auth = useSelector(authSelector);
	const history = useHistory();
	const firebase = useFirebase();

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
	console.log(store.getState());
	console.log('games: ', games);

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
				return <h3 key={game.id}>{game.name}</h3>;
			})}
		</>
	);
};
export default Games;
