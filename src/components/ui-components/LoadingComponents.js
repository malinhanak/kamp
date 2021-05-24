import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import '@fontsource/roboto-mono/500.css';

const pulse = keyframes`
	0% {
		box-shadow: 0 0 0 0 rgba(55, 95, 110, 0.7);
	}

	70% {
		box-shadow: 0 0 0 30px rgba(55, 95, 110, 0);
	}

	100% {
		box-shadow: 0 0 0 30px rgba(55, 95, 110, 0);
	}
`;

const Container = styled(motion.section)`
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
	line-height: 95px;
`;

export const LoadingCircle = styled.div`
	width: 228px;
	height: 228px;
	background: rgba(${(props) => props.theme.colors.white}, 0.75);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid ${(props) => props.theme.colors.primary};
	margin-bottom: 13rem;
	box-sizing: border-box;
	animation: ${pulse} 2s infinite;
`;

const EnterText = styled.p`
	text-decoration: none;
	font-family: 'Roboto Mono';
	text-transform: lowercase;
	font-size: 0.98rem;
	color: ${(props) => props.theme.colors.darkBase};
	margin-left: 0.7rem;
`;

export const LoadingComponent = ({ classname, linkText = false }) => {
	return (
		<Container
			className={classname}
			initial={{ y: 0 }}
			exit={{ y: '1000vh' }}
			transition={{ duration: 1 }}
		>
			<LoadingCircle>
				<Logotype>K</Logotype>
				{linkText && <EnterText>{linkText}</EnterText>}
			</LoadingCircle>
		</Container>
	);
};
