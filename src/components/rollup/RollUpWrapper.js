import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';

export const Style = styled(motion.section)`
	width: 100%;
	height: 40%;
	min-height: 200px;
	background: rgba(${(props) => props.theme.colors.white});
	border-radius: 20px 20px 0 0;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
		rgba(0, 0, 0, 0.09) 0px -3px 5px;
	position: fixed;
	inset: auto auto 0 0;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const rollUpVariant = {
	initial: {
		y: '200vh',
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.2,
		},
	},
	exit: {
		y: '200vh',
		transition: {
			duration: 0.5,
		},
	},
};

function RollUpWrapper({ children, action, ...rest }) {
	const ref = useRef(null);
	useClickAway(ref, () => action());

	return (
		<Style {...rest} ref={ref}>
			{children}
		</Style>
	);
}

export default RollUpWrapper;
