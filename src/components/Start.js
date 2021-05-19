import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoadingComponent } from './ui-components/LoadingComponents';

const Start = () => {
	const { location, replace } = useHistory();

	useEffect(() => {
		const timer = setTimeout(() => replace('/login'), 5000);
		return () => clearTimeout(timer);
	}, [location, replace]);

	return (
		<LoadingComponent
			as={motion.img}
			animate={{ opacity: 0 }}
			transition={{ delay: 4.5, duration: 0.5 }}
		/>
	);
};

export default Start;
