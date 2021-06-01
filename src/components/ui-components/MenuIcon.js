import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { drawerContext } from 'utils/providers/drawerProvider';
import { Menu } from 'react-feather';

const Base = styled(motion.div)`
	position: fixed;
	top: 1.5rem;
	left: 1.5rem;
	z-index: 100;
	min-width: 40px;
	min-height: 40px;
	background: ${(props) => props.theme.colors.darkBase};
	border: 2px solid rgb(${(props) => props.theme.colors.white});
	border-radius: 50%;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Bar = styled.div`
	width: 80%;
	height: 2px;
	background: rgb(${(props) => props.theme.colors.white});
	margin: 0;
	margin-bottom: 0.3rem;
	border-radius: 12px;

	&:nth-child(2) {
		width: 75%;
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const MenuIcon = () => {
	const { openDrawer } = useContext(drawerContext);
	const location = useLocation();

	const isVisible =
		location.pathname !== '/' && location.pathname !== '/kamp/' && location.pathname !== '/kamp';

	return (
		isVisible && (
			<Base
				initial={{ opacity: 0, left: -100 }}
				animate={{ opacity: 1, left: '1.5rem' }}
				transition={{ delay: 1, duration: 1 }}
				onClick={() => openDrawer()}
			>
				<Menu color="white" />
			</Base>
		)
	);
};
