import { motion } from 'framer-motion';
import styled from 'styled-components';

const Style = styled(motion.div)`
	width: 55px;
	height: 31px;
	border-radius: 100px;
	padding: 5px;
	display: flex;
	cursor: pointer;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&.on {
		background-color: #22cc88;
		justify-content: flex-end;
	}

	&.off {
		background-color: #dddddd;
		justify-content: flex-start;
	}
`;

const Controller = styled(motion.div)`
	display: flex;
	width: 20px;
	height: 20px;
	background-color: #ffffff;
	border-radius: 50%;
	box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const Switch = ({ isOn, classname, action, ...props }) => {
	return (
		<Style
			animate={{
				justifyContent: isOn ? 'flex-end' : 'flex-start',
				backgroundColor: isOn ? '#22cc88' : '#dddddd',
			}}
			transition={{ duration: 0.5 }}
			className={classname}
			onClick={() => action()}
			{...props}
		>
			<Controller />
		</Style>
	);
};
