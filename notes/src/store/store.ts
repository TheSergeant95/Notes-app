import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/reduces';
import rootSaga from '../redux-saga/sagas';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(rootSaga);

export default store;
