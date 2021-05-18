import { MainLongBg } from 'assets';
import styled, { css } from 'styled-components';

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

const circleHidden = css`
	display: none;
`;

const Circle = styled.div`
	width: 100%;
	height: 60%;
	background: rgba(${(props) => props.theme.colors.white}, 0.5);
	clip-path: circle(70% at 50% -48%);

	position: absolute;
	top: 0;
	right: 0;
	z-index: 12;

	${(props) => props.path === '/' && circleHidden}
`;

const BG = styled.img`
	width: 100%;
	height: auto;

	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
`;

export const Background = ({ classname, path }) => {
	return (
		<Container className={classname}>
			<Circle path={path} />
			<BG src={MainLongBg} viewBox="0 0 700 812" />
		</Container>
	);
};
