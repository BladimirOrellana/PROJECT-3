import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider
} from "../firebase/firebase";
import {
  SIGNIN_FACEBOOK_USER,
  SIGNIN_GITHUB_USER,
  SIGNIN_GOOGLE_USER,
  SIGNIN_TWITTER_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER,
  CREATE_ACTIVATE_USER,
  ACTIVATE_USER_OR_CHANGE_PASSWORD
} from "constants/ActionTypes";
import {
  showAuthMessage,
  userSignInSuccess,
  userSignOutSuccess,
  userSignUpSuccess,
  hideMessage
} from "actions/Auth";
import {
  userFacebookSignInSuccess,
  userGithubSignInSuccess,
  userGoogleSignInSuccess,
  userTwitterSignInSuccess
} from "../actions/Auth";
import UsersAPI from "../api/UserAPI";
import { emptyingReducerP } from "actions";

const createNewUserClientDataBase = async (name, email, phone) =>
  await UsersAPI.saveUser({
    name: name,
    email: email,
    phone: phone,
    role: "Client"
  })
    .then(authUser => authUser)
    .catch(error => error);

const FindUserByEmailDataBase = async email =>
  await UsersAPI.getUserByEmail(email)
    .then(authUser => authUser)
    .catch(error => error);

const createUserWithEmailPasswordRequest = async (email, password) =>
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithEmailPasswordRequest = async (email, password) =>
  await auth
    .signInWithEmailAndPassword(email, password)
    .then(authUser => authUser)
    .catch(error => error);

const signOutRequest = async () =>
  await auth
    .signOut()
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithGoogleRequest = async () =>
  await auth
    .signInWithPopup(googleAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithFacebookRequest = async () =>
  await auth
    .signInWithPopup(facebookAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithGithubRequest = async () =>
  await auth
    .signInWithPopup(githubAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithTwitterRequest = async () =>
  await auth
    .signInWithPopup(twitterAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const deletingASignedFirebaseUser = async () => {
  let user = auth.currentUser;
  await user
    .delete()
    .then(function() {
      // FirebaseUser deleted.
    })
    .catch(error => error);
};

const actionCodeSettings = {
  url: "https://hb-fencing.herokuapp.com/"
};

const changeThePasswordRequest = async email =>
  await auth
    .sendPasswordResetEmail(email, actionCodeSettings)
    .then(res => res)
    .catch(error => error);

function* createUserWithEmailPassword({ payload }) {
  const { email, password, phone, name } = payload;
  try {
    const signUpUser = yield call(
      createUserWithEmailPasswordRequest,
      email,
      password
    );
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      const signUpUserDB = yield call(
        createNewUserClientDataBase,
        name,
        email,
        phone
      );
      localStorage.setItem("user_id", signUpUser.user.uid);
      localStorage.setItem("user_user", JSON.stringify(signUpUserDB.data));
      yield put(
        userSignUpSuccess({ uid: signUpUser.user.uid, user: signUpUserDB.data })
      );
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithGoogle() {
  try {
    const signUpUser = yield call(signInUserWithGoogleRequest);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      const User = yield call(FindUserByEmailDataBase, signUpUser.user.email);

      if (User.data) {
        localStorage.setItem("user_id", signUpUser.user.uid);
        localStorage.setItem("user_user", JSON.stringify(User.data));
        yield put(
          userGoogleSignInSuccess({ uid: signUpUser.user.uid, user: User.data })
        );
      } else {
        yield call(deletingASignedFirebaseUser);
        yield put(showAuthMessage("You need to Sign Up First"));
      }
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithFacebook() {
  try {
    const signUpUser = yield call(signInUserWithFacebookRequest);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      const User = yield call(FindUserByEmailDataBase, signUpUser.user.email);

      if (User.data) {
        localStorage.setItem("user_id", signUpUser.user.uid);
        localStorage.setItem("user_user", JSON.stringify(User.data));
        yield put(
          userFacebookSignInSuccess({
            uid: signUpUser.user.uid,
            user: User.data
          })
        );
      } else {
        yield call(deletingASignedFirebaseUser);
        yield put(showAuthMessage("You need to Sign Up First"));
      }
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithGithub() {
  try {
    const signUpUser = yield call(signInUserWithGithubRequest);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      localStorage.setItem("user_id", signUpUser.user.uid);
      yield put(userGithubSignInSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithTwitter() {
  try {
    const signUpUser = yield call(signInUserWithTwitterRequest);
    if (signUpUser.message) {
      if (signUpUser.message.length > 100) {
        yield put(showAuthMessage("Your request has been canceled."));
      } else {
        yield put(showAuthMessage(signUpUser.message));
      }
    } else {
      localStorage.setItem("user_id", signUpUser.user.uid);
      yield put(userTwitterSignInSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithEmailPassword({ payload }) {
  const { email, password } = payload;
  try {
    const signInUser = yield call(
      signInUserWithEmailPasswordRequest,
      email,
      password
    );
    if (signInUser.message) {
      yield put(showAuthMessage(signInUser.message));
    } else {
      const User = yield call(FindUserByEmailDataBase, email);

      if (User.data) {
        localStorage.setItem("user_id", signInUser.user.uid);
        localStorage.setItem("user_user", JSON.stringify(User.data));
        yield put(
          userSignInSuccess({ uid: signInUser.user.uid, user: User.data })
        );
      } else {
        yield call(deletingASignedFirebaseUser);
        yield put(showAuthMessage("You need to Sign Up First"));
      }
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signOut() {
  try {
    const signOutUser = yield call(signOutRequest);
    if (signOutUser === undefined) {
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_user");
      yield put(emptyingReducerP());
      yield put(userSignOutSuccess(signOutUser));
    } else {
      yield put(showAuthMessage(signOutUser.message));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* createActivateUserFG(payload) {
  const { email } = payload.payload;

  try {
    const signUpUser = yield call(
      createUserWithEmailPasswordRequest,
      email,
      "user123" //temporary password
    );
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
      yield put(hideMessage());
    } else {
      yield call(changeThePasswordRequest, email);
    }
  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

function* activateUserOrChangePasswordFG(payload) {
  const { email } = payload.payload;
  try {
    yield call(changeThePasswordRequest, email);
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* createUserAccount() {
  yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInWithGoogle() {
  yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInWithFacebook() {
  yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
}

export function* signInWithTwitter() {
  yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
}

export function* signInWithGithub() {
  yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
}

export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export function* createActivateUserListen() {
  yield takeEvery(CREATE_ACTIVATE_USER, createActivateUserFG);
}

export function* activateUserOrChangePasswordListen() {
  yield takeEvery(
    ACTIVATE_USER_OR_CHANGE_PASSWORD,
    activateUserOrChangePasswordFG
  );
}

export default function* rootSaga() {
  yield all([
    fork(signInUser),
    fork(createUserAccount),
    fork(signInWithGoogle),
    fork(signInWithFacebook),
    fork(signInWithTwitter),
    fork(signInWithGithub),
    fork(signOutUser),
    fork(createActivateUserListen),
    fork(activateUserOrChangePasswordListen)
  ]);
}
