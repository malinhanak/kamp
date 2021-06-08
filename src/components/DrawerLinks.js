import { DrawerLink } from './Drawer';
import LogoutBtn from './Logout';
import LoginBtn from './LoginBtn';
import { auth as authSelector } from 'store/selectors/auth';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { useContext } from 'react';
import { uiControlContext } from 'utils/providers/uiControlProvider';

export default function DrawerLinks() {
	const { closeDrawer } = useContext(uiControlContext);
	const auth = useSelector(authSelector);

	return (
		<>
			<DrawerLink to="/about" onClick={closeDrawer}>
				Om kamp
			</DrawerLink>
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
