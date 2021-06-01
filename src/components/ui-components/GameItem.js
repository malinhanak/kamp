import { GameItemBG } from 'assets';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '@fontsource/roboto-mono/500.css';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export const GamesContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Item = styled(motion.article)`
	width: 100%;
	min-height: 80px;
	border-radius: 8px;
	margin-bottom: 1rem;
`;

const LinkedItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${GameItemBG});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left top;
	height: 100%;
	padding: 1rem 2rem;
	border-radius: 8px;
	text-decoration: none;
`;

export const itemVariant = {
	initial: { x: '400vw' },
	animate: { x: 0, transition: { duration: 0.5 } },
	exit: { x: '-400vw' },
};

export const GameItem = ({ classname, children, path, ...rest }) => {
	const dispatch = useDispatch();
	return (
		<Item className={classname} {...rest}>
			<LinkedItem onClick={() => dispatch(push(path))}>{children}</LinkedItem>
		</Item>
	);
};
