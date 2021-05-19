import { LoginPage } from 'components/Login';
import { render, screen, waitFor, cleanup } from 'config/test-utils';
import { initialState } from 'store/reducer';

describe('Should test the LoginPage Component', () => {
	afterEach(() => {
		cleanup();
	});

	it('renders learn react link', async () => {
		render(<LoginPage />, { initialState: initialState });
		const linkElement = await screen.findByText(/Auth/i);
		await waitFor(() => expect(linkElement).toBeInTheDocument());
	});
});
