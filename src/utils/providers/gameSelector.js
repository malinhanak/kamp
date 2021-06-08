import { createContext } from 'react';
import { useUiControl } from 'utils/hooks/useUiControl';

export const uiControlContext = createContext({
	openDrawer: () => {},
	closeDrawer: () => {},
	openModal: () => {},
	closeModal: () => {},
	isModalOpen: false,
	isDrawerOpen: false,
});

const { Provider } = uiControlContext;

const UiControlProvider = ({ children }) => {
	const [isDrawerOpen, isModalOpen, openDrawer, closeDrawer, openModal, closeModal] =
		useUiControl();

	return (
		<Provider
			value={{
				openDrawer,
				closeDrawer,
				openModal,
				closeModal,
				isModalOpen,
				isDrawerOpen,
			}}
		>
			{children}
		</Provider>
	);
};

export default UiControlProvider;
