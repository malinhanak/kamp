import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoadingComponent } from './ui-components/LoadingComponents';

const Start = () => {
	const history = useHistory();
	console.log(history);

	useEffect(() => {
		const timer = setTimeout(() => history.replace('/login'), 5000);
		return () => clearTimeout(timer);
	}, [history]);

	return <LoadingComponent />;
};

export default Start;
