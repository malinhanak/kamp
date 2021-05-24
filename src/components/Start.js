import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Background } from './ui-components/Background';
import { LoadingComponent } from './ui-components/LoadingComponents';

const Start = () => {
	return (
		<>
			<Background viewBox="0 0 700 812" />
			<EnterLink to="/login">
				<LoadingComponent linkText="Enter" />
			</EnterLink>
		</>
	);
};

export default Start;

const EnterLink = styled(Link)`
	text-decoration: none;
`;
