import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = function({ component: Component, ...rest }) {
	const renderComponent = function(routeProps) {
		// TODO: check if user is logged in
		const loggedIn = true;
		if (loggedIn) {
			return <Component {...routeProps} />;
		} else return <Redirect to={{ pathname: '/signin', state: { from: routeProps.location } }} />;
	};

	return <Route {...rest} render={renderComponent} />;
};
