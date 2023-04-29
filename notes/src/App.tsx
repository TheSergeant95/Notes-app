import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from './pages/MainScreen';
import useStyles from './hooks/useStyles';
import NavBar from './components/NavBar';

function App(): JSX.Element {
	const { classes } = useStyles();
	return (
		<div className={classes.root}>
			<NavBar />
			<MainScreen />
		</div>
	);
}

export default App;
