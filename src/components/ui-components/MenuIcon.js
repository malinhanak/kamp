import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const Base = styled.div`
	position: fixed;
	top: 1.5rem;
	left: 1.5rem;
	z-index: 100;
	min-width: 30px;
	min-height: 30px;
	background: ${(props) => props.theme.colors.darkBase};
	border: 2px solid rgb(${(props) => props.theme.colors.white});
	border-radius: 50%;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Bar = styled.div`
	width: 80%;
	height: 2px;
	background: rgb(${(props) => props.theme.colors.white});
	margin: 0;
	margin-bottom: 0.3rem;
	border-radius: 12px;

	&:nth-child(2) {
		width: 75%;
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const MenuIcon = () => {
	const [isVisible, setIsVisible] = useState(false);
	let { pathname } = useLocation();
	console.log(pathname);

	useEffect(() => {
		console.log('rendering', pathname);
		if (pathname !== '/') {
			console.log('path changed', pathname);
			setIsVisible(true);
		}

		return () => setIsVisible(false);
	}, [pathname]);

	return (
		<Base
			as={motion.div}
			initial={{ opacity: 0, left: -100 }}
			animate={isVisible ? { opacity: 1, left: '1.5rem' } : ''}
			transition={{ delay: 1, duration: 1 }}
			exit={{ opacity: 0, left: -100 }}
		>
			<Bar />
			<Bar />
			<Bar />
		</Base>
	);
};
