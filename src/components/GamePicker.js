import { useRouteMatch, withRouter } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';
import { useState } from 'react';
import { Paragraph, Typography } from './ui-components/Typography';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Picker = styled(motion.div)`
	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 20px;
	width: 100%;
	padding: 0.5rem 1.5rem;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
`;

const Selections = styled(motion.div)`
	background-color: rgb(${(props) => props.theme.colors.white});
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 10px;
	width: 100%;
	min-height: 150px;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 0.5rem;
	position: absolute;
	bottom: 50px;
`;

const Wrapper = styled.section`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 180px;
	margin-top: 1rem;
`;

export function GamePicker({ gameSelection }) {
	const [isOpen, setIsOpen] = useState(false);
	const match = useRouteMatch();
	const dispatch = useDispatch();

	const onTap = (event, info) => {
		console.log(info.point.x, info.point.y);
		setIsOpen(!isOpen);
	};

	const dropdownVariant = {
		initial: {
			opacity: 1,
			rotateX: 0,
			display: 'flex',
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
			transitionEnd: {
				display: 'none',
			},
		},
	};

	const games = gameSelection?.map((game) => {
		return (
			<Typography
				as={Paragraph}
				onClick={() => dispatch(push(`${match.url}/${game.toLowerCase()}`))}
				key={game}
				margin="0.7rem 0 0.7rem 0.7rem"
				align="left"
			>
				{game}
			</Typography>
		);
	});

	return (
		<AnimatePresence>
			<Wrapper>
				{isOpen && (
					<Selections variants={dropdownVariant} initial="exit" animate="initial" exit="exit">
						{games}
					</Selections>
				)}
				<Picker onTap={onTap}>
					välj tävlingsgren <ChevronDown size={24} strokeWidth={1.5} />
				</Picker>
			</Wrapper>
		</AnimatePresence>
	);
}
export default withRouter(GamePicker);
