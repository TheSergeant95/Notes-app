import React from 'react';
import useStyles from '../hooks/useStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar: React.FC = () => {
	const { classes } = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Web Notes
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
