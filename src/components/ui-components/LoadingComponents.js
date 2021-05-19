import { AnimatePresence, motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0% {
		transform: scale(0.98);
		box-shadow: 0 0 0 0 rgba(115, 192, 176, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 30px rgba(115, 192, 176, 0);
	}

	100% {
		transform: scale(0.98);
		box-shadow: 0 0 0 30px rgba(115, 192, 176, 0);
	}
`;

const Container = styled.section`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logotype = styled.h1`
	margin: 0;
	padding: 0;
	font-family: aw-conqueror-carved, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 6rem;
	color: ${(props) => props.theme.colors.primary};
`;

export const LoadingCircle = styled.div`
	width: 228px;
	height: 228px;
	background: rgba(${(props) => props.theme.colors.white}, 0.75);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${(props) => props.theme.colors.primary};
	margin-bottom: 13rem;
	box-sizing: border-box;
	animation: ${pulse} 2s infinite;
`;

export const LoadingComponent = ({ classname }) => {
	return (
		<Container className={classname}>
			<LoadingCircle>
				<Logotype>K</Logotype>
			</LoadingCircle>
		</Container>
	);
};
