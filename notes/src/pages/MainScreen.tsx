import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useStyles from '../hooks/useStyles';
import { Note } from '../interfaces/note.interface';

const MainScreen: React.FC = () => {
	const { classes } = useStyles();
	const [notes, setNotes] = useState<Note[]>([]);
	const [newNoteText, setNewNoteText] = useState<string>('');
  
	const handleNewNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	  setNewNoteText(event.target.value);
	};
  
	const handleNewNoteSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	  event.preventDefault();
	  const newNote: Note = {
		id: Date.now(),
		text: newNoteText,
	  };
	  setNotes([...notes, newNote]);
	  setNewNoteText('');
	};
  
	return (
	  <div className={classes.root}>
		<AppBar position="static">
		  <Toolbar>
			<Typography variant="h6" className={classes.title}>
			  Notes App
			</Typography>
			<Button color="inherit">Login</Button>
		  </Toolbar>
		</AppBar>
		<Grid container spacing={2}>
		  <Grid item xs={12}>
			<form onSubmit={handleNewNoteSubmit}>
			  <TextField
				label="New Note"
				fullWidth
				value={newNoteText}
				onChange={handleNewNoteChange}
			  />
			  <Button type="submit" variant="contained" color="primary">
				Add Note
			  </Button>
			</form>
		  </Grid>
		  <Grid item xs={12}>
			<List>
			  {notes.map((note) => (
				<ListItem key={note.id}>
				  <ListItemText primary={note.text} />
				</ListItem>
			  ))}
			</List>
		  </Grid>
		</Grid>
	  </div>
	);
  };
  
  export default MainScreen;