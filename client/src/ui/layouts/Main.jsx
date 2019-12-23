import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { PrivateRoute } from '../utilities/PrivateRoute';

// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Tips from '../pages/Tips';
import Foods from '../pages/Foods';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			flexGrow: 1,
		},
		container: {
			paddingTop: '32px',
			paddingBottom: '32px',
		},
		toolbarOffset: theme.mixins.toolbar,
	};
});

export default function Main(props) {
	const styles = useStyles();

	return (
		<main className={styles.root}>
			<div className={styles.toolbarOffset} />
			<Container classes={{ root: styles.container }} maxWidth="xl">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/tips" component={Tips} />
					<Route exact path="/foods" component={Foods} />
					<Route exact path="/signin" component={SignIn} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<Route path="/" component={() => <h4>404 not found!</h4>} />
				</Switch>
			</Container>
		</main>
	);
}
