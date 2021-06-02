import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { Closer as ModalClose } from 'components/Drawer';
import { HeadingFour, Typography } from './Typography';

const ModalWrapper = styled(motion.section)`
	width: calc(100% - 2rem);
	height: calc(100% - 2rem);
	background: rgba(${(props) => props.theme.colors.white});
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	position: fixed;
	top: 1rem;
	left: 1rem;
	z-index: 10000;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

const wrapperVariant = {
	initial: {
		y: '200vh',
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		y: '200vh',
		transition: {
			duration: 0.5,
		},
	},
};

function Modal({ title, children, action = false }) {
	const { isModalOpen, closeModal } = useContext(uiControlContext);

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isModalOpen && (
				<ModalWrapper variants={wrapperVariant} initial="initial" animate="animate" exit="exit">
					<ModalClose action={action ? action : closeModal} />
					<Typography as={HeadingFour} casing="upper" align="left" margin="0 0 1.5rem 0">
						{title}
					</Typography>
					{children}
				</ModalWrapper>
			)}
		</AnimatePresence>,
		document.getElementById('modal-root'),
	);
}

export default Modal;
