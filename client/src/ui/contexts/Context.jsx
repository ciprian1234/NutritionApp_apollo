import React from 'react';

export const Context = React.createContext();

export function ContextProvider(props) {
	// state of the context provider
	const [ui, setUi] = React.useState({ sidenavOpen: true });

	const toggleSidenav = () => setUi({ ...ui, sidenavOpen: !ui.sidenavOpen });

	const exportedContext = { ui, toggleSidenav };

	return <Context.Provider value={exportedContext}>{props.children}</Context.Provider>;
}
