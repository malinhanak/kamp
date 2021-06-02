import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.section`
	width: 100%;
	height: calc(50% - 200px);
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: 4;
`;

const MainContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 90%;
	background-color: rgb(${(props) => props.theme.colors.white});
	// border: 16px solid rgba(${(props) => props.theme.colors.white}, 0.52);
	border: 16px solid rgba(0, 0, 0, 0.52);
	-webkit-background-clip: padding-box;
	background-clip: padding-box;
	border-radius: 1rem;
	padding: 1.2rem;
`;

export const ContentWrapper = ({ classname, children }) => {
	return (
		<Wrapper id="wrapper" className={classname}>
			<MainContainer id="main-container">{children}</MainContainer>
		</Wrapper>
	);
};
