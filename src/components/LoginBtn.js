import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { auth as authSelector } from 'store/selectors/auth';
import { useContext } from 'react';
import { DrawerLink } from './Drawer';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import '@fontsource/roboto-mono/700.css';

function Login() {
	const { closeDrawer } = useContext(uiControlContext);
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
