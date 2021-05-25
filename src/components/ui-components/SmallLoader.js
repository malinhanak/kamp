import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HeadingSix, Typography } from './Typography';

const Loader = styled(motion.div)`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.darkBase};
`;

const loaderVariants = {
	animate: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				duration: 0.5,
				yoyo: Infinity,
			},
			y: {
				duration: 0.25,
				yoyo: Infinity,
			},
		},
	},
};

export default function SmallLoader() {
	return (
		<div
			style={{
				margin: 'auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Loader variants={loaderVariants} initial="initial" animate="animate" />
			<Typography as={HeadingSix} casing="upper" fontColor="darkBase" style={{ margin: 0 }}>
				Loading
			</Typography>
		</div>
	);
}
