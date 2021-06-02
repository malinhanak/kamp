import { withRouter } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';
import { useContext, useRef, useState, memo, useCallback } from 'react';
import { Paragraph, Typography } from './ui-components/Typography';
import { useDispatch } from 'react-redux';
import { useClickAway } from 'react-use';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import GameModal from './GameModal';

const Picker = styled(motion.div)`
	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 20px;
	width: 90%;
	padding: 0.5rem 1.5rem;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	margin: 0 auto;
`;

const Selections = styled(motion.div)`
	background-color: rgb(${(props) => props.theme.colors.white});
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 10px;
	width: 90%;
	min-height: 150px;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0 auto 0.5rem;
	position: absolute;
	bottom: 50px;
`;

const Wrapper = styled.section`
	width: 100%;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	min-height: 180px;
	margin-top: 1rem;
	bottom: 1rem;
	left: 0;
`;

export function GamePicker({ gameSelection }) {
	const { isModalOpen, openModal } = useContext(uiControlContext);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const ref = useRef(null);

	useClickAway(ref, () => setIsOpen(false));

	const onTap = (event, info) => setIsOpen(!isOpen);

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

	const iconVariant = {
		initial: {
			rotate: 0,
			transition: {
				duration: 0.5,
			},
		},
		animate: {
			rotate: 180,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			rotate: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const setSelectedGameTriggerModal = useCallback(
		(selectedGame) => {
			dispatch({ type: 'SELECTED_GAME', payload: selectedGame });
			openModal();
		},
		[dispatch, openModal],
	);

	const games = gameSelection?.map((game) => {
		return (
			<Typography
				as={Paragraph}
				onClick={() => setSelectedGameTriggerModal(game)}
				key={game}
				margin="0.7rem 0 0.7rem 0.7rem"
				align="left"
			>
				{game}
			</Typography>
		);
	});

	return (
		<>
			<AnimatePresence>
				<Wrapper ref={ref} id="game-picker">
					{isOpen && (
						<Selections variants={dropdownVariant} initial="exit" animate="initial" exit="exit">
							{games}
						</Selections>
					)}
					<Picker onTap={onTap}>
						välj tävlingsgren
						<motion.span
							variants={iconVariant}
							animate={isOpen ? 'animate' : 'exit'}
							style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
						>
							<ChevronDown size={24} strokeWidth={1.5} />
						</motion.span>
					</Picker>
				</Wrapper>
			</AnimatePresence>
			{/* TODO: Optimize Modal Presence state for animation and rendering */}
			<GameModal />
		</>
	);
}
export default withRouter(memo(GamePicker));
