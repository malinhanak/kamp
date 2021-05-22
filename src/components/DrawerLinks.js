import { DrawerLink } from './Drawer';
import LogoutBtn from './Logout';
import LoginBtn from './LoginBtn';
import { auth as authSelector } from 'store/selectors/auth';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { useContext } from 'react';
import { drawerContext } from 'utils/providers/drawerProvider';

export default function DrawerLinks() {
	const { closeDrawer } = useContext(drawerContext);
	const auth = useSelector(authSelector);

	return (
		<>
			{!isEmpty(auth) && isLoaded(auth) && (
				<DrawerLink to="/games" onClick={closeDrawer}>
					Spelkatalog
				</DrawerLink>
			)}
			<LogoutBtn />
			<LoginBtn />
		</>
	);
}
