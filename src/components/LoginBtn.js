import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { auth as authSelector } from 'store/selectors/auth';
import '@fontsource/roboto-mono/700.css';
import { useContext } from 'react';
import { drawerContext } from 'utils/providers/drawerProvider';
import { DrawerLink } from './Drawer';

function Login() {
	const { closeDrawer } = useContext(drawerContext);
	const auth = useSelector(authSelector);

	return (
		isEmpty(auth) &&
		isLoaded(auth) && (
			<DrawerLink to="/login" onClick={closeDrawer}>
				Logga in
			</DrawerLink>
		)
	);
}

export default Login;
