import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export default function useVisability(initialValue = false) {
	const [isVisible, setIsVisible] = useState(initialValue);
	let { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== '/') {
			console.log('is mounting');
			setIsVisible(true);
		}

		return () => {
			console.log('is dismounting');
			setIsVisible(false);
		};
	}, [pathname]);

	return [isVisible];
}
