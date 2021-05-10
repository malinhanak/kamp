import styled from 'styled-components';

const Container = styled.section`
	height: ${(props) => props.bgHeight || '60vh'};
	width: 100vw;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
`;

const Dark = styled.div`
	width: 100%;
	height: 80%;
	background: ${(props) => props.theme.colors.greens.dark};
	clip-path: polygon(0 0, 100% 0, 100% 82%, 0 42%);

	position: absolute;
	top: 0;
	right: 0;
	z-index: 10;
`;

const Mellow = styled.div`
	width: 100%;
	height: 90%;
	background: ${(props) => props.theme.colors.greens.mellow};
	clip-path: polygon(0 0, 100% 0, 100% 33%, 0 90%);

	position: absolute;
	top: 0;
	right: 0;
	z-index: 8;
`;

const Light = styled.div`
	width: 100%;
	height: 100%;
	background: ${(props) => props.theme.colors.greens.light};
	clip-path: polygon(0 0, 100% 0, 100% 96%, 0 23%);

	position: absolute;
	top: 0;
	right: 0;
	z-index: 5;
`;

const Matte = styled.div`
	width: 100%;
	height: 96%;
	background: ${(props) => props.theme.colors.greens.matte};
	clip-path: polygon(0 0, 100% 0, 100% 56%, 0 88%);

	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
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
`;

export const Background = ({ classname }) => {
	return (
		<Container className={classname}>
			<Circle />
			<Dark />
			<Mellow />
			<Light />
			<Matte />
		</Container>
	);
};
