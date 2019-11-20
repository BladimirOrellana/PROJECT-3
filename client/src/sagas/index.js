import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import projectSagas from './Project';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        projectSagas()
    ]);
}
