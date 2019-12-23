import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => {
	return {
		appbar: {
			zIndex: theme.zIndex.drawer + 1,
		},
		title: {
			flexGrow: 1,
		},
	};
});

export default function Header(props) {
	const styles = useStyles();
	const loggedIn = false;

	const loggedInRightButtons = (
		<React.Fragment>
			<IconButton>
				<Badge badgeContent={11} color="secondary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
			<IconButton>
				<AccountCircle />
			</IconButton>
			<Button to="/" component={Link} onClick={() => console.log('TODO: implement logout')}>
				Logout
			</Button>
		</React.Fragment>
	);

	const loggedOutRightButtons = (
		<Button to="/signin" component={Link} color="secondary" variant="contained">
			SignIn
		</Button>
	);

	return (
		<AppBar position="fixed" className={styles.appbar} color="default">
			<Toolbar>
				<Typography variant="h5" className={styles.title}>
					Nutrition App
				</Typography>
				{loggedIn ? loggedInRightButtons : loggedOutRightButtons}
			</Toolbar>
		</AppBar>
	);
}
