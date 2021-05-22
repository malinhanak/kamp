import { createContext } from 'react';
import { useDrawer } from 'utils/hooks/useDrawer';

export const drawerContext = createContext({
	openDrawer: () => {},
	closeDrawer: () => {},
	isDrawerOpen: false,
});

const { Provider } = drawerContext;

const DrawerProvider = ({ children }) => {
	const [isDrawerOpen, openDrawer, closeDrawer] = useDrawer();

	return (
		<Provider
			value={{
				openDrawer,
				closeDrawer,
				isDrawerOpen,
			}}
		>
			{children}
		</Provider>
	);
};

export default DrawerProvider;
