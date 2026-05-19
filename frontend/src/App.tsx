import './App.css';
import { Route, Routes } from 'react-router';
import { HomePage } from '@pages';
import { Nav } from '@header';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
