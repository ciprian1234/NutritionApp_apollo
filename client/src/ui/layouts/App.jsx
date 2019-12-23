import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ContextProvider } from '../contexts/Context';
import Header from './Header';
import Sidenav from './Sidenav';
import Main from './Main';

export default function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<CssBaseline />
				<Header />
				<div style={{ display: 'flex' }}>
					<Sidenav />
					<Main />
				</div>
			</BrowserRouter>
		</ContextProvider>
	);
}
