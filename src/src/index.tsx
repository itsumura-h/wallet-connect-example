import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';

import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Home path="/" />
					<NotFound default />
				</Router>
				</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
