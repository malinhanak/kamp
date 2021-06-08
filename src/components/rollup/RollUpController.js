import styled, { css } from 'styled-components';

export const Style = styled.section`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.primary};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.margin &&
		css`
			margin: ${props.margin};
		`}
`;

function RollUpController({ children, action, ...rest }) {
	return (
		<Style onClick={() => action()} {...rest}>
			{children}
		</Style>
	);
}

export default RollUpController;
