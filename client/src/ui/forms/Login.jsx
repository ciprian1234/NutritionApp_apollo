import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			marginTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
		},
	};
});

export default function Login(props) {
	const styles = useStyles();
	const history = useHistory();

	//states
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleChangeEmail = (event) => setEmail(event.target.value);
	const handleChangePassword = (event) => setPassword(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();
		// TODO: handle login submit implementation
		history.push('/');
	};

	return (
		<form onSubmit={handleSubmit} className={styles.root}>
			<Grid container spacing={2} direction="column" alignItems="center">
				<Grid item xs>
					<TextField label="Email" value={email} onChange={handleChangeEmail} />
				</Grid>
				<Grid item xs>
					<TextField label="Password" type="password" value={password} onChange={handleChangePassword} />
				</Grid>
				<Grid item xs>
					<Button type="submit" variant="contained" color="primary">
						Login
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
