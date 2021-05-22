import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Background } from './ui-components/Background';
import { LoadingComponent } from './ui-components/LoadingComponents';

const LoginPage = lazy(() => import('./Login'));
const Games = lazy(() => import('./Games'));

const Start = () => {
	const location = useLocation();

	return (
		<>
			<Background viewBox="0 0 700 812" />
			<LoadingComponent linkText="Enter" />
		</>
	);
};

export default Start;
