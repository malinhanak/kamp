import { withRouter } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { ChevronDown, Star, Sliders } from 'react-feather';
import { useContext, useRef, memo, useCallback } from 'react';
import { Paragraph, Typography } from 'components/ui-components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from 'react-use';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import GameModal from 'components/game/GameModal';
import ModalWrapper, { wrapperVariant } from 'components/ui-components/ModalWrapper';
import RollUpWrapper, { rollUpVariant } from 'components/rollup/RollUpWrapper';
import { RankingList } from 'components/ranking/RankingList';
import RollUpController from 'components/rollup/RollUpController';
import { auth as authSelector } from 'store/selectors/auth';
import { GameOwnerSettings } from 'components/GameOwnerSettings';

const Picker = styled(motion.div)`
	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 20px;
	flex: 1 1 65%;
	padding: 0.5rem 1.5rem;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`;

const BottomNavigation = styled.section`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem 1rem;
	margin-top: 1rem;
	position: fixed;
	inset: auto auto 0 0;
`;

export function GamePicker({ gameSelection, isPointsHidden, ownerId }) {
	const ref = useRef(null);
	const {
		isModalOpen,
		isRankingOpen,
		isSelectionOpen,
		isSettingsOpen,
		openModal,
		openRanking,
		closeRanking,
		openSelection,
		closeSelection,
		openSettings,
		closeSettings,
	} = useContext(uiControlContext);
	useClickAway(ref, () => closeSelection());
	const dispatch = useDispatch();
	const auth = useSelector(authSelector);

	const playerIsGameOwner = ownerId === auth?.uid;

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
		(e, selectedGame) => {
			e.preventDefault();
			dispatch({ type: 'SELECTED_GAME', payload: selectedGame });
			openModal();
		},
		[dispatch, openModal],
	);

	const games = gameSelection?.map((game) => {
		return (
			<Typography
				as={Paragraph}
				onClick={(e) => setSelectedGameTriggerModal(e, game)}
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
				<BottomNavigation id="bottom-nav" key="bottom-nav">
					{playerIsGameOwner && (
						<RollUpController id="settings-opener" action={openSettings} margin="0 1rem 0 0">
							<Sliders size={24} strokeWidth={1.7} color="white" />
						</RollUpController>
					)}
					<Picker
						onClick={(e) => {
							e.preventDefault();
							openSelection();
						}}
						id="picker"
					>
						välj tävlingsgren
						<motion.span
							variants={iconVariant}
							animate={isSelectionOpen ? 'animate' : 'exit'}
							style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
						>
							<ChevronDown size={24} strokeWidth={1.5} />
						</motion.span>
					</Picker>
					<RollUpController id="ranking-opener" action={openRanking} margin="0 0 0 1rem">
						<Star size={24} strokeWidth={1.7} color="white" />
					</RollUpController>
				</BottomNavigation>
				{isSettingsOpen && (
					<RollUpWrapper
						variants={rollUpVariant}
						initial="initial"
						animate="animate"
						exit="exit"
						key="ranking"
						action={closeSettings}
					>
						<GameOwnerSettings isPointsHidden={isPointsHidden} />
					</RollUpWrapper>
				)}
				{isSelectionOpen && (
					<RollUpWrapper
						variants={rollUpVariant}
						initial="initial"
						animate="animate"
						exit="exit"
						key="selection"
						action={closeSelection}
					>
						{games}
					</RollUpWrapper>
				)}
				{isRankingOpen && (
					<RollUpWrapper
						variants={rollUpVariant}
						initial="initial"
						animate="animate"
						exit="exit"
						key="ranking"
						action={closeRanking}
					>
						<RankingList isPointsHidden={isPointsHidden} />
					</RollUpWrapper>
				)}
				{isModalOpen && (
					<ModalWrapper
						variants={wrapperVariant}
						initial="initial"
						animate="animate"
						exit="exit"
						key="modal"
					>
						<GameModal />
					</ModalWrapper>
				)}
			</AnimatePresence>
		</>
	);
}
export default withRouter(memo(GamePicker));
