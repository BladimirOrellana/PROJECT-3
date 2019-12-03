import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import projectSagas from './Project';
import yourQuotes from './YourQuotes';
import quoteDetails from './QuoteDetails';
import addMiscellaneous from './add-miscellaneous';
import usersWithQuotes from './GetUsersWithQuotes';
import rawMaterialSagas from './RawMaterialsSaga';
export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        projectSagas(),
        yourQuotes(),
        quoteDetails(),
        addMiscellaneous(),
        usersWithQuotes(),
        rawMaterialSagas()
    ]);
}
