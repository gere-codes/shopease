import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '@store';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
);
