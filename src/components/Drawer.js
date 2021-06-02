import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { X } from 'react-feather';
import '@fontsource/roboto-condensed';
import { useContext, useRef } from 'react';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useClickAway } from 'react-use';

const DrawerWrapper = styled.aside`
	width: 100%;
	height: 100%;
	filter: drop-shadow(5px 2px 0 rgba(${(props) => props.theme.colors.darkBaseRGB}, 0.36));
	position: fixed;
	top: 0;
	left: 0;
	z-index: 120;
	width: 80%;
	max-width: 265px;
	height: 470px;
`;

const DrawerContent = styled.section`
	background: ${(props) => props.theme.colors.offWhite};
	padding: 1rem;
	position: relative;
	min-height: 100%;
	clip-path: polygon(0 0, 100% 0, 100% 74%, 0 100%);
	display: flex;
	flex-direction: column;
`;

export const DrawerClose = styled.div`
	background: rgba(${(props) => props.theme.colors.greensSoft}, 0.39);
	width: 40px;
	height: 40px;
	padding: 0.5rem;
	position: absolute;
	top: 1rem;
	right: 1rem;
	border-radius: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DrawerTitle = styled.header`
	color: ${(props) => props.theme.colors.primary};
	width: 70%;
	padding-bottom: 0.6rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	font-size: 1.5rem;
	font-family: 'Roboto Condensed';
	text-transform: uppercase;
	margin-bottom: 2rem;
`;

export const DrawerLink = styled(NavLink)`
	background: transparent;
	border: none;
	color: ${(props) => props.theme.colors.secondary};
	font-size: 1rem;
	font-family: 'Roboto Mono';
	margin-bottom: 0.5rem;
	text-decoration: none;
`;

export const Closer = ({ classname, action }) => {
	return (
		<DrawerClose className={classname} onClick={() => action()}>
			<X size={24} strokeWidth={1.5} />
		</DrawerClose>
	);
};

function Drawer({ children }) {
	const { isDrawerOpen, closeDrawer } = useContext(uiControlContext);

	const ref = useRef(null);
	useClickAway(ref, () => closeDrawer());

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isDrawerOpen && (
				<DrawerWrapper
					ref={ref}
					as={motion.aside}
					initial={{ x: -300 }}
					animate={{ x: 0 }}
					exit={{ x: -300 }}
					transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}
				>
					<DrawerContent>
						<DrawerTitle>Navigation</DrawerTitle>
						<Closer action={closeDrawer} />
						{children}
					</DrawerContent>
				</DrawerWrapper>
			)}
		</AnimatePresence>,
		document.getElementById('drawer-root'),
	);
}

export default Drawer;
