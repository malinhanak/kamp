import styled from 'styled-components';
import '@fontsource/roboto-condensed';
import '@fontsource/poppins';
import { motion } from 'framer-motion';

const textCasing = (casing) => {
	switch (casing) {
		case 'upper':
			return 'uppercase';
		case 'lower':
			return 'lowercase';
		default:
			return 'none';
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
	font-size: 1.5rem;
	text-align: ${(props) => props.align || 'center'};
	width: 100%;
	margin: ${(props) => props.margin || 'inherit'};
`;

export const HeadingSix = styled(motion.h6)`
	font-size: 1.1rem;
	text-align: ${(props) => props.align || 'center'};
	width: 100%;
	margin: ${(props) => props.margin || 'inherit'};
`;

export const Paragraph = styled.p`
	font-family: ${(props) => props.theme.font.family};
	font-size: 0.85rem;
	text-align: ${(props) => props.align || 'center'};
	width: 100%;
	margin: ${(props) => props.margin || 'inherit'};
`;

export const GamesLinkText = styled.h4`
	text-decoration: none;
	font-size: 1.2rem;
	color: rgb(${(props) => props.theme.colors.white});
`;

export const TransformParagraph = styled(Typography)`
	font-family: ${(props) => props.theme.font.family};
	font-size: 0.85rem;
	text-align: justify;
	width: 100%;
	margin: 0 0 0.8rem 0;
`;
