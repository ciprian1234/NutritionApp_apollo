import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton, Button, Avatar } from '@material-ui/core';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			flexGrow: 1,
		},
	};
});

export default function FoodItem(props) {
	const styles = useStyles();
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
			<Card>
				<CardHeader
					title="Banana"
					subheader="Fruit"
					avatar={<Avatar>F</Avatar>}
					action={
						<IconButton>
							<MoreVertIcon />
						</IconButton>
					}
				/>

				<CardContent>
					<Typography variant="h5">Nutrients</Typography>
					<Typography variant="body2">Carbs: 10g</Typography>
					<Typography variant="body2">Fats: 20g</Typography>
					<Typography variant="body2">Proteins: 5g</Typography>

					<Typography variant="h6">Minerals</Typography>
					<Typography variant="body2">Sodium: 1mg</Typography>
					<Typography variant="body2">Potasium: 358mg</Typography>
					<Typography variant="body2">Iron: 0.3mg</Typography>
					<Typography variant="body2">Magnesium: 27mg</Typography>
					<Typography variant="body2">Calcium: 0ug</Typography>

					<Typography variant="h6">Vitamins</Typography>
					<Typography variant="body2">Vitamin A: 64ui</Typography>
					<Typography variant="body2">Vitamin C: 8.7mg</Typography>
					<Typography variant="body2">Vitamin B-6: 0.4mg</Typography>
					<Typography variant="body2">Vitamin D: 0g</Typography>

					<Table size={'small'} className={styles.table}>
						<TableHead>
							<TableRow>
								<TableCell>Nutrient</TableCell>
								<TableCell>Quantity</TableCell>
								<TableCell>Daily Percent</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Potasium</TableCell>
								<TableCell>358mg</TableCell>
								<TableCell>10%</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Vitamin C</TableCell>
								<TableCell>8.7mg</TableCell>
								<TableCell>14%</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>

				<CardActions>
					<Button>Show more..</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
