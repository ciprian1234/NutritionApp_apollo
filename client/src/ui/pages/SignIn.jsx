import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';

// import components
import Login from '../forms/Login';
import Register from '../forms/Register';

const useStyles = makeStyles(() => {
	return {
		root: {
			display: 'flex',
			justifyContent: 'center',
		},
	};
});

export default function SignIn(props) {
	const [selectedTab, setSelectedTab] = React.useState(0);
	const styles = useStyles();

	const handleTabChange = (event, newValue) => setSelectedTab(newValue);

	const signInComponent = selectedTab === 0 ? <Login /> : <Register />;

	return (
		<Paper>
			<div className={styles.root}>
				<Tabs value={selectedTab} onChange={handleTabChange}>
					<Tab label="Login" />
					<Tab label="Register" />
				</Tabs>
			</div>
			{signInComponent}
		</Paper>
	);
}
