import Wrapper from 'styles/ContentWrapper';

export const withWrapper =
	(Component) =>
	({ ...props }) =>
		(
			<Wrapper>
				<Component {...props} />
			</Wrapper>
		);
