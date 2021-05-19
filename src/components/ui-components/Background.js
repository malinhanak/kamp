import { MainLongBg, SvgCircle } from 'assets';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import '@fontsource/roboto-mono/500.css';

export const Layout = styled.main`
	height: 100vh;
	width: 100vw;
	position: relative;
`;

const Container = styled.section`
	height: ${(props) => props.bgHeight || '60vh'};
	width: 100vw;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
`;

const Circle = styled.img`
	width: 100%;
	height: auto;
`;

const Wrapper = styled.div`
	width: 100%;
	max-height: 400px;

	position: fixed;
	top: 0;
	right: 0;
	z-index: 12;
`;

const BG = styled.img`
	width: 100%;
	height: auto;

	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
`;

const Title = styled.h3`
	font-family: 'Roboto Mono';
	position: absolute;
	z-index: 20;
	margin-top: 3rem;
	top: 0;
	text-transform: lowercase;
	font-size: 0.98rem;
	color: ${(props) => props.theme.colors.font};
`;

const Heading = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
`;

export const Background = ({ classname, path }) => {
	useEffect(() => {}, [path]);
	return (
		<Container className={classname}>
			<BG
				src={MainLongBg}
				viewBox="0 0 700 812"
				as={motion.img}
				initial={path !== '/' ? { y: -100 } : { y: 0 }}
				animate={path === '/' ? { y: -100 } : ''}
				transition={{ delay: 5, duration: 1 }}
			/>
		</Container>
	);
};

export const TitleCircle = ({ classname, title }) => {
	return (
		<Wrapper
			id="title-circle"
			className={classname}
			as={motion.div}
			initial={{ y: '-100%' }}
			animate={{ y: 0 }}
			exit={{ y: '-100%' }}
			transition={{ duration: 2 }}
		>
			<Heading>
				<Circle src={SvgCircle} viewBox="0 0 700 812" />
				<Title>{title}</Title>
			</Heading>
		</Wrapper>
	);
};
