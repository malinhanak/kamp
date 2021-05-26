import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Background } from './ui-components/Background';
import { LoadingComponentLinked } from './ui-components/LoadingComponents';

const Start = () => {
	return (
		<>
			<Background viewBox="0 0 700 812" />
			<LoadingComponentLinked linkText="Enter" />
		</>
	);
};

export default Start;

const EnterLink = styled(Link)`
	max-width: 230px;
	text-decoration: none;
`;
