import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LOAD_USERS_P,
  ADD_USER_P,
  REMOVE_USER_P,
  EDIT_USER_P
} from "constants/ActionTypes";
import { showAuthMessage, hideMessage } from "actions";
import {
  loadUsersSuccess,
  createActivateUser,
  activateUserOrChangePassword
} from "actions/User";
import UserAPI from "../api/UserAPI";

const GetUsersWhere = async payload =>
  await UserAPI.getUsersWhere(payload)
    .then(result => result)
    .catch(error => error);

const AddUser = async payload =>
  await UserAPI.saveUser(payload)
    .then(result => result)
    .catch(error => error);

const EditUser = async (_id, user) =>
  await UserAPI.updateUser(_id, user)
    .then(result => result)
    .catch(error => error);

const RemoveUser = async payload =>
  await UserAPI.deleteUser(payload)
    .then(result => result)
    .catch(error => error);

const FindUserByEmailDataBase = async email =>
  await UserAPI.getUserByEmail(email)
    .then(authUser => authUser)
    .catch(error => error);

function* loadUsersGF({ payload }) {
  const selected = payload;
  try {
    const users = yield call(GetUsersWhere, { role: selected });
    yield put(loadUsersSuccess({ users: users.data, selected }));
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* addUserGF({ payload }) {
  const { name, email, phone, role, selected, activateAccount } = payload;

  try {
    const user = yield call(FindUserByEmailDataBase, email);
    if (user.data) {
      yield put(showAuthMessage("The email is already in use"));
      yield put(hideMessage());
    } else {
      if (activateAccount) {
        yield put(createActivateUser({ email }));
      }
      yield call(AddUser, { name, email, phone, role });

      const users = yield call(GetUsersWhere, { role: selected });
      yield put(loadUsersSuccess({ users: users.data, selected }));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* editUserGF({ payload }) {
  const { name, email, phone, role, selected, _id, activateAccount } = payload;

  try {
    const user = yield call(FindUserByEmailDataBase, email);
    if (user.data && user.data._id !== _id) {
      yield put(showAuthMessage("I am sorry the email is already in use"));
      yield put(hideMessage());
    } else {
      if (activateAccount) {
        yield put(activateUserOrChangePassword({ email }));
      }

      yield call(EditUser, _id, { name, email, phone, role });
      const users = yield call(GetUsersWhere, { role: selected });
      yield put(loadUsersSuccess({ users: users.data, selected }));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* removeUserGF({ payload }) {
  const { _id, selected } = payload;

  try {
    yield call(RemoveUser, _id);

    const users = yield call(GetUsersWhere, { role: selected });
    yield put(loadUsersSuccess({ users: users.data, selected }));
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

export function* loadUsersListen() {
  yield takeEvery(LOAD_USERS_P, loadUsersGF);
}

export function* addUserListen() {
  yield takeEvery(ADD_USER_P, addUserGF);
}

export function* editUserListen() {
  yield takeEvery(EDIT_USER_P, editUserGF);
}

export function* removeUserListen() {
  yield takeEvery(REMOVE_USER_P, removeUserGF);
}

export default function* rootSaga() {
  yield all([
    fork(loadUsersListen),
    fork(addUserListen),
    fork(editUserListen),
    fork(removeUserListen)
  ]);
}
