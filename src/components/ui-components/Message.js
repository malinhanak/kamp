import styled from 'styled-components';
import { HeadingFour, Typography, Paragraph } from './Typography';

const MessageContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 70%;
	margin: auto;
`;

export const Message = ({ classname, title, children }) => {
	return (
		<MessageContainer className={classname}>
			<Typography as={HeadingFour} casing="upper" fontColor="primary">
				{title}
			</Typography>
			<Typography as={Paragraph}>{children}</Typography>
		</MessageContainer>
	);
};
