import { withRouter } from 'react-router';
import { PageTitle } from './ui-components/PageTitle';

export function About() {
	return (
		<>
			<PageTitle title="Om kamp" />
			About
		</>
	);
}
export default withRouter(About);
