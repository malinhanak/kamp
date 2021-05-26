export const loginVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: { duration: 0.5 },
	},
	exit: { opacity: 0 },
};

export const gamesVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.4 },
	},
	exit: { opacity: 0 },
};
