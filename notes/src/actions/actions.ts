import { createAction } from 'typesafe-actions';

export const addNote = createAction('ADD_NOTE')<string>();
export const toggleNote = createAction('TOGGLE_NOTE')<number>();
export const deleteNote = createAction('DELETE_NOTE')<number>();
