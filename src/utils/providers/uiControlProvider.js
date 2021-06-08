import { createContext } from 'react';
import { useUiControl } from 'utils/hooks/useUiControl';

export const uiControlContext = createContext({
	isSelectionOpen: false,
	isDrawerOpen: false,
	isModalOpen: false,
	isRankingOpen: false,
	openDrawer: () => {},
	closeSelection: () => {},
	openSelection: () => {},
	closeDrawer: () => {},
	openModal: () => {},
	closeModal: () => {},
	openRanking: () => {},
	closeRanking: () => {},
	openSettings: () => {},
	closeSettings: () => {},
});

const { Provider } = uiControlContext;

const UiControlProvider = ({ children }) => {
	const [
		isSelectionOpen,
		isDrawerOpen,
		isModalOpen,
		isRankingOpen,
		isSettingsOpen,
		openDrawer,
		closeSelection,
		openSelection,
		closeDrawer,
		openModal,
		closeModal,
		openRanking,
		closeRanking,
		openSettings,
		closeSettings,
		,
	] = useUiControl();

	return (
		<Provider
			value={{
				isSelectionOpen,
				isDrawerOpen,
				isModalOpen,
				isRankingOpen,
				isSettingsOpen,
				openDrawer,
				closeSelection,
				openSelection,
				closeDrawer,
				openModal,
				closeModal,
				openRanking,
				closeRanking,
				openSettings,
				closeSettings,
			}}
		>
			{children}
		</Provider>
	);
};

export default UiControlProvider;
