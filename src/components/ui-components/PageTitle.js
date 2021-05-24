import { SvgCircle } from 'assets';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '@fontsource/roboto-mono/500.css';
import ReactDOM from 'react-dom';

export const PageTitle = ({ classname, title }) => {
	return ReactDOM.createPortal(
		<Heading
			className={classname}
			initial={{ y: '-100vh', opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: '-100vh' }}
			transition={{ ease: 'easeInOut', duration: 1 }}
		>
			<Circle src={SvgCircle} viewBox="0 0 700 812" />
			<Title>{title}</Title>
		</Heading>,
		document.getElementById('page-title-root'),
	);
};

const Circle = styled.img`
	width: 100%;
	height: 140px;
`;

const Title = styled.h3`
	position: absolute;
	z-index: 20;
	margin-top: 3rem;
	top: 0;
	font-family: 'Roboto Mono';
	text-transform: lowercase;
	font-size: 0.98rem;
	color: ${(props) => props.theme.colors.font};
`;

const Heading = styled(motion.section)`
	display: flex;
	justify-content: center;
`;
