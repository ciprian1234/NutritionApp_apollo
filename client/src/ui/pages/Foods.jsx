import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import FoodItem from '../components/FoodItem';

const useStyles = makeStyles((theme) => {
	return {
		root: {},
	};
});

export default function Foods(props) {
	const styles = useStyles();
	return (
		<Grid container spacing={2} className={styles.root}>
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
		</Grid>
	);
}
