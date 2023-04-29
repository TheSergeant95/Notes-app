import { all, takeLatest, put } from 'redux-saga/effects';
import { addNote, toggleNote, deleteNote } from '../actions/actions';

function* handleAddNote({ payload }: ReturnType<typeof addNote>) {
	yield put({ type: 'ADD_NOTE_SUCCESS', payload });
}

function* handleToggleNote({ payload }: ReturnType<typeof toggleNote>) {
	yield put({ type: 'TOGGLE_NOTE_SUCCESS', payload });
}

function* handleDeleteNote({ payload }: ReturnType<typeof deleteNote>) {
	yield put({ type: 'DELETE_NOTE_SUCCESS', payload });
}

export default function* rootSaga() {
	yield all([
		takeLatest(addNote, handleAddNote),
		takeLatest(toggleNote, handleToggleNote),
		takeLatest(deleteNote, handleDeleteNote),
	]);
}
