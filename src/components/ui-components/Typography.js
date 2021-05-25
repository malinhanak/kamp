import styled from 'styled-components';
import '@fontsource/roboto-condensed';
import { motion } from 'framer-motion';

const textCasing = (casing) => {
	switch (casing) {
		case 'upper':
			return 'uppercase';
		case 'lower':
			return 'lowercase';
		default:
			return 'normal';
	}
};

export const Typography = styled(motion.div)`
	font-family: ${(props) => props.theme.font.alt.family};
	font-weight: ${(props) => props.fontWeight || 400};
	color: ${(props) => props.theme.colors[props.fontColor]};
	font-style: ${(props) => props.fontStyle || 'normal'};
	text-transform: ${(props) => textCasing(props.casing)};
`;

export const HeadingFour = styled(motion.h4)`
	font-size: 2rem;
	text-align: center;
	width: 100%;
	margin: ${(props) => props.margin || 'inherit'};
`;

export const HeadingSix = styled(motion.h6)`
	font-size: 1.1rem;
	text-align: center;
	width: 100%;
	margin: ${(props) => props.margin || 'inherit'};
`;

export const Paragraph = styled.p`
	font-family: ${(props) => props.theme.font.family};
	font-size: 0.8rem;
	text-align: center;
	width: 100%;
	margin: ${(props) => props.margin || 'inherit'};
`;
