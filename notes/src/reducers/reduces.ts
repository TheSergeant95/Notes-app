import { combineReducers } from 'redux';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/actions';
import Note from '../interfaces/note.type';

export type NotesState = {
	readonly notes: Note[];
};

export type NotesAction = ActionType<typeof actions>;

const initialState: NotesState = {
	notes: [],
};

export const notesReducer = createReducer<NotesState, NotesAction>(initialState)
	.handleAction(actions.addNote, (state, action) => ({
		notes: [
			...state.notes,
			{
				id: state.notes.length + 1,
				text: action.payload,
				completed: false,
			},
		],
	}))
	.handleAction(actions.toggleNote, (state, action) => ({
		notes: state.notes.map((note) =>
			note.id === action.payload ? { ...note, completed: !note.completed } : note,
		),
	}))
	.handleAction(actions.deleteNote, (state, action) => ({
		notes: state.notes.filter((note) => note.id !== action.payload),
	}));

const rootReducer = combineReducers({
	notes: notesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
