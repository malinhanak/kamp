import { motion } from 'framer-motion';

const loadingContainer = {
	width: '2rem',
	height: '2rem',
	display: 'flex',
	justifyContent: 'space-around',
	margin: 'auto',
};

const loadingCircle = {
	display: 'block',
	width: '0.5rem',
	height: '0.5rem',
	backgroundColor: '#73C0B0',
	borderRadius: '0.25rem',
};

const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const loadingCircleVariants = {
	start: {
		y: '50%',
	},
	end: {
		y: '150%',
	},
};

const loadingCircleTransition = {
	duration: 0.5,
	repeat: Infinity,
	ease: 'easeInOut',
};

export default function ThreeDotsWave() {
	return (
		<motion.div
			style={loadingContainer}
			variants={loadingContainerVariants}
			initial="start"
			animate="end"
		>
			<motion.span
				style={loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
			<motion.span
				style={loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
			<motion.span
				style={loadingCircle}
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			/>
		</motion.div>
	);
}
