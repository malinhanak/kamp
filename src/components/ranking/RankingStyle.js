import styled from 'styled-components';

export const List = styled.ol`
	list-style: none;
	counter-reset: my-awesome-counter;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	& li {
		counter-increment: my-awesome-counter;
	}
	& li::before {
		content: counter(my-awesome-counter) '. ';
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.font.alt.family};
		font-weight: 500;
		font-size: 1.2rem;
		width: 0.8rem;
		display: flex;
		flex: 1 1 1rem;
		margin-right: 0.5rem;
	}
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;
`;
