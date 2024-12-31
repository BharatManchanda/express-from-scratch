import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './Theme/index.jsx'

createRoot(document.getElementById('root')).render(
	<>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</>,
)
