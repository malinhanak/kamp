import styled from 'styled-components';
import '@fontsource/roboto-condensed';
import { motion } from 'framer-motion';

export const Typography = styled(motion.div)`
	font-family: ${(props) => props.theme.font.alt.family};
	font-weight: ${(props) => props.fontWeight || 400};
	color: ${(props) => props.theme.colors[props.fontColor]};
	font-style: ${(props) => props.fontStyle || 'normal'};
`;

export const HeadingSix = styled(motion.h6)`
	font-size: 1.1rem;
	text-transform: uppercase;
	text-align: center;
	width: 100%;
`;
