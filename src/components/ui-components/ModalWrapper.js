import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalStyle = styled(motion.section)`
	width: calc(100% - 2rem);
	height: calc(100% - 2rem);
	background: rgba(${(props) => props.theme.colors.white});
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	position: fixed;
	top: 1rem;
	left: 1rem;
	z-index: 999;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const wrapperVariant = {
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

function ModalWrapper({ children, ...rest }) {
	return ReactDOM.createPortal(
		<ModalStyle {...rest}>{children}</ModalStyle>,
		document.getElementById('modal-root'),
	);
}

export default ModalWrapper;
