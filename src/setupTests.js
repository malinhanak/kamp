// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('react-redux-firebase', () => ({
	...jest.requireActual('react-redux-firebase'),
	useFirestoreConnect: jest.fn(),
}));

jest.mock('react-dom', () => {
	return {
		...jest.requireActual('react-dom'),
		createPortal: (element, target) => {
			return element;
		},
	};
});
