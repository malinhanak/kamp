import { useState } from 'react';

export function useUiControl() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isRankingOpen, setIsRankingOpen] = useState(false);
	const [isSelectionOpen, setIsSelectionOpen] = useState(false);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const openDrawer = () => setIsDrawerOpen(true);
	const closeDrawer = () => setIsDrawerOpen(false);

	const openRanking = () => setIsRankingOpen(true);
	const closeRanking = () => setIsRankingOpen(false);

	const openSelection = () => setIsSelectionOpen(true);
	const closeSelection = () => setIsSelectionOpen(false);

	const openSettings = () => setIsSettingsOpen(true);
	const closeSettings = () => setIsSettingsOpen(false);

	return [
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
	];
}
