import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme: Theme) => {
	return {
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
		},
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		},
		paper: {
			padding: theme.spacing(2),
			margin: 'auto',
			maxWidth: 500,
		},
		form: {
			display: 'flex',
			alignItems: 'baseline',
			justifyContent: 'space-evenly',
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '60%',
		},
		button: {
			margin: theme.spacing(1),
		},
		list: {
			backgroundColor: theme.palette.background.paper,
		},
	};
});

export default useStyles;
