import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router';
import { auth as authSelector } from 'store/selectors/auth';
import styled from 'styled-components';
import '@fontsource/roboto-mono/700.css';
import { useContext } from 'react';
import { drawerContext } from 'utils/providers/drawerProvider';

const LogoutBtn = styled.button`
	background: transparent;
	border: none;
	color: ${(props) => props.theme.colors.secondary};
	font-size: 1rem;
	font-family: 'Roboto Mono';
	margin-bottom: 0.5rem;
	padding: 0;
	text-align: left;
`;

function Logout() {
	const { closeDrawer } = useContext(drawerContext);
	const auth = useSelector(authSelector);
	const history = useHistory();
	const firebase = useFirebase();

	const signOut = () => {
		firebase.logout().then(() => history.push('/login'));
	};

	return (
		!isEmpty(auth) &&
		isLoaded(auth) && (
			<LogoutBtn
				onClick={(event) => {
					event.preventDefault();
					signOut();
					closeDrawer();
				}}
			>
				Logga ut
			</LogoutBtn>
		)
	);
}

export default Logout;
