import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			marginTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
		},
	};
});

export default function Register(props) {
	const styles = useStyles();
	const history = useHistory();

	//states
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [name, setName] = React.useState('');
	const [selectedDate, setSelectedDate] = React.useState(new Date('2017-08-12T07:00:00'));

	const handleChangeEmail = (event) => setEmail(event.target.value);
	const handleChangePassword = (event) => setPassword(event.target.value);
	const handleChangeName = (event) => setName(event.target.value);
	const handleSelectedDate = (date) => setSelectedDate(date);

	const handleSubmit = (event) => {
		event.preventDefault();
		// TODO: handle register submit implementation
		history.push('/');
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit}>
			<Grid container spacing={2} direction="column" alignItems="center">
				<Grid item xs>
					<TextField label="Email" value={email} onChange={handleChangeEmail} />
				</Grid>
				<Grid item xs>
					<TextField label="Password" type="password" value={password} onChange={handleChangePassword} />
				</Grid>
				<Grid item xs>
					<TextField label="Repeat Password" type="password" />
				</Grid>
				<Grid item xs>
					<TextField label="Name" value={name} onChange={handleChangeName} />
				</Grid>
				<Grid item xs>
					<FormLabel>Gender</FormLabel>
					<RadioGroup defaultValue="male" name="customized-radios">
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="female" control={<Radio />} label="Female" />
					</RadioGroup>
				</Grid>
				<Grid item xs>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="dd/MM/yyyy"
							label="Birth Date"
							value={selectedDate}
							onChange={handleSelectedDate}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs>
					<TextField label="Weight (optional)" />
				</Grid>
				<Grid item xs>
					<TextField label="Height (optional)" />
				</Grid>
				<Grid item xs>
					<Button variant="contained" color="primary" type="submit">
						Register
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
