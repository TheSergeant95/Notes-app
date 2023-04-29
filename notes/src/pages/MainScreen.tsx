import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, toggleNote, deleteNote } from '../actions/actions';
import { AppState } from '../reducers/reduces';
import {
	Container,
	Paper,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from '@mui/material';
import useStyles from '../hooks/useStyles';
import Note from '../interfaces/note.type';

const MainScreen: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();
	const notes = useSelector((state: AppState) => state.notes.notes);

	const [newNoteText, setNewNoteText] = useState('');
	const handleNoteAdd = () => {
		if (newNoteText !== '') {
			dispatch(addNote(newNoteText));
			setNewNoteText('');
		}
	};

	const handleNoteToggle = (id: number) => {
		dispatch(toggleNote(id));
	};

	const handleNoteDelete = (id: number) => {
		dispatch(deleteNote(id));
	};

	return (
		<div className={classes.container}>
			<Container>
				<Paper className={classes.paper}>
					<List>
						{!notes
							? null
							: notes.map((note: Note) => (
									<ListItem key={note.id} dense button onClick={() => handleNoteToggle(note.id)}>
										<ListItemText
											primary={note.text}
											style={{ textDecoration: note.completed ? 'line-through' : 'none' }}
										/>
										<ListItemSecondaryAction>
											<IconButton
												edge="end"
												aria-label="delete"
												onClick={() => handleNoteDelete(note.id)}
											>
												<i className="material-icons">delete</i>
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
							  ))}
						<ListItem>
							<ListItemText>
								<input
									type="text"
									placeholder="Add a note..."
									value={newNoteText}
									onChange={(e) => setNewNoteText(e.target.value)}
								/>
							</ListItemText>
							<ListItemSecondaryAction>
								<IconButton edge="end" aria-label="add" onClick={handleNoteAdd}>
									<i className="material-icons">add</i>
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					</List>
				</Paper>
			</Container>
		</div>
	);
};

export default MainScreen;
