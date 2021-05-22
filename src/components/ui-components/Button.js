import { loginVariants } from 'components/Login';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const ButtonStyle = styled(motion.button)`
	border: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) => props.variation === 'google' && google}
`;

const google = css`
	border: 1px solid ${(props) => props.theme.colors.buttons.google.blue};
	background: ${(props) => props.theme.colors.buttons.google.base};
	border-radius: 50%;
	width: 52px;
	height: 52px;
`;

function Button({ classname, icon, text, action, variation = null }) {
	return (
		<ButtonStyle
			className={classname}
			variation={variation}
			onClick={(e) => {
				e.preventDefault();
				action();
			}}
			variants={loginVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{icon && icon}
			{text && text}
		</ButtonStyle>
	);
}

export default Button;
