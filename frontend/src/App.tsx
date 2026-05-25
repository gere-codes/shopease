import './App.css';
import { Route, Routes } from 'react-router';
import { CatalogPage, HomePage, ProductPage } from '@pages';
import { Nav } from '@header';
import { Footer } from '@common';

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Nav />
			<main className="grow">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/catalog" element={<CatalogPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
