import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import { UserIsAuthenticated } from '../utils/HOC/ProtectedRoute';
import { motion } from 'framer-motion';
import { loginVariants } from './Login';
import { PageTitle } from './ui-components/PageTitle';

export function NewPlayer() {
	const auth = useSelector(authSelector);

	console.log(auth);

	return (
		<motion.div variants={loginVariants} initial="initial" animate="animate" exit="exit">
			<PageTitle title="Ny Spelare" />
			Hej du är en ny spelare
		</motion.div>
	);
}
export default withRouter(UserIsAuthenticated(NewPlayer));
