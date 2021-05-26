import { GameItemBG } from 'assets';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '@fontsource/roboto-mono/500.css';

export const GamesContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0 auto;
`;

const Item = styled(motion.article)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${GameItemBG});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left top;
	width: 90%;
	max-width: 250px;
	min-height: 80px;
	padding: 1rem 2rem;
	border-radius: 8px;
	margin-bottom: 1rem;
`;

export const itemVariant = {
	initial: { x: '400vw' },
	animate: { x: 0, transition: { duration: 0.5 } },
	exit: { x: '-400vw' },
};

export const GameItem = ({ classname, children, ...rest }) => {
	return (
		<Item className={classname} {...rest}>
			{children}
		</Item>
	);
};
