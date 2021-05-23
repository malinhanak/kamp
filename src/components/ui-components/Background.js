import { MainLongBg, SvgCircle } from 'assets';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '@fontsource/roboto-mono/500.css';

export const Layout = styled.main`
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

	pointer-events: none;
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

	pointer-events: none;
`;

const BG = styled(motion.img)`
	width: 100%;
	height: auto;

	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;

	pointer-events: none;
`;

const NoAnimateBG = styled(BG)`
	transform: translateY(-250px);
	z-index: 0;
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
	position: relative;
	display: flex;
	justify-content: center;
`;

export const Background = ({ classname, path }) => {
	return (
		<Container className={classname}>
			<BG
				src={MainLongBg}
				viewBox="0 0 700 812"
				initial={{ y: 0 }}
				animate={{ y: 0 }}
				exit={{ y: -250 }}
				transition={{ duration: 1 }}
			/>
		</Container>
	);
};

export const LayoutBackground = ({ classname, path }) => {
	return (
		<Container className={classname}>
			<NoAnimateBG src={MainLongBg} viewBox="0 0 700 812" />
		</Container>
	);
};

export const TitleCircle = ({ classname, title }) => {
	return (
		<Wrapper id="title-circle" className={classname}>
			<Heading
				className={classname}
				initial={{ y: '-100vh', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: '-100vh' }}
				transition={{ ease: 'easeInOut', duration: 1 }}
			>
				<Circle src={SvgCircle} viewBox="0 0 700 812" />
				<Title>{title}</Title>
			</Heading>
		</Wrapper>
	);
};
