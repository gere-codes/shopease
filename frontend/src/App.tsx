import './App.css';
import { Route, Routes } from 'react-router';
import { HomePage } from '@pages';
import { Nav } from '@header';
import { Footer } from '@common';

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Nav />
			<main className="grow">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
