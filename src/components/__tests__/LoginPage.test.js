import { LoginPage } from 'components/Login';
import { render, screen, waitFor, cleanup } from 'config/test-utils';
import { initialState } from 'store/reducer';

jest.mock('react-dom', () => {
	return {
		...jest.requireActual('react-dom'),
		createPortal: (element, target) => {
			return element;
		},
	};
});

describe('Should test the LoginPage Component', () => {
	afterEach(() => {
		cleanup();
	});

	it('renders learn react link', async () => {
		render(<LoginPage />, { initialState: initialState });
		const linkElement = await screen.findByText(/ANSLUT OCH LÅT SPELEN BÖRJA…/i);
		await waitFor(() => expect(linkElement).toBeInTheDocument());
	});
});
