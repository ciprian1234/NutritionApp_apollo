import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			padding: theme.spacing(2),
		},
	};
});

export default function Tips(props) {
	const styles = useStyles();
	return (
		<Paper className={styles.root}>
			<Typography variant="h3">Tips to age slowly</Typography>
			<Typography variant="body1">Avoid DNA damage (sun, xrays)</Typography>
			<Typography variant="body1">Intermitent fasting</Typography>
			<Typography variant="body1">Eat less, apply 80% rule</Typography>
			<Typography variant="body1">Eat less protein</Typography>
			<Typography variant="body1">Exercise HIIT (High Intensity Interval Training)</Typography>
			<Typography variant="body1">Be uncomfortably cold or be unconfortably hot</Typography>
		</Paper>
	);
}
