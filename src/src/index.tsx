import { LocationProvider, Router, hydrate, prerender as ssr } from 'preact-iso';
import { ConnectKitProviderWrapper } from './providers/ConnectKitProvider';
import { Home } from './pages/Home';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<ConnectKitProviderWrapper>
				<main>
					<Router>
						<Home path="/" />
						<NotFound default />
					</Router>
				</main>
			</ConnectKitProviderWrapper>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
