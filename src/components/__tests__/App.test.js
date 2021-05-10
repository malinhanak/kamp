import App from 'components/App';
import { render, screen, waitFor, cleanup } from 'config/test-utils';
import { initialState } from 'store/reducer';
import { store } from 'store/store';

describe('Should test the App Component', () => {
	afterEach(() => {
		cleanup();
	});

	test('renders learn react link', async () => {
		render(<App />, { initialState: initialState, store });
		const linkElement = await screen.findByText(/Loading/i);
		await waitFor(() => expect(linkElement).toBeInTheDocument());
	});
});
