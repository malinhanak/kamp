import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useRouteMatch, withRouter } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import { UserIsAuthenticated } from '../utils/HOC/ProtectedRoute';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loginVariants } from './Login';
import { PageTitle } from './ui-components/PageTitle';

export function Games() {
	const auth = useSelector(authSelector);
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

	return (
		<motion.div variants={loginVariants} initial="initial" animate="animate" exit="exit">
			<PageTitle title="Spelkatalog" />
			{games?.map((game) => {
				return (
					<motion.h3 key={game.id} variants={loginVariants}>
						<Link to={`${match.url}/${game.id}`}>{game.name}</Link>
					</motion.h3>
				);
			})}
		</motion.div>
	);
}
export default withRouter(UserIsAuthenticated(Games));
