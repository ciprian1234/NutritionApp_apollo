import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const drawerWidth = 200;
const useStyles = makeStyles((theme) => {
	return {
		toolbarOffset: theme.mixins.toolbar,
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},
	};
});

export default function Sidenav(props) {
	const styles = useStyles();

	return (
		<Drawer variant="permanent" className={styles.drawer} classes={{ paper: styles.drawerPaper }}>
			<div className={styles.toolbarOffset} />

			<List>
				<ListItem button component={Link} to="/">
					<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem button component={Link} to="/profile">
					<ListItemText primary="Profile" />
				</ListItem>
				<ListItem button component={Link} to="/about">
					<ListItemText primary="About" />
				</ListItem>
				<ListItem button component={Link} to="/tips">
					<ListItemText primary="Tips" />
				</ListItem>
				<ListItem button component={Link} to="/foods">
					<ListItemText primary="Foods" />
				</ListItem>
			</List>
			<Divider />
		</Drawer>
	);
}
