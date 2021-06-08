import { useState } from 'react';

export function useGameSelector() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const openDrawer = () => setIsDrawerOpen(true);
	const closeDrawer = () => setIsDrawerOpen(false);

	return [isDrawerOpen, isModalOpen, openDrawer, closeDrawer, openModal, closeModal];
}
