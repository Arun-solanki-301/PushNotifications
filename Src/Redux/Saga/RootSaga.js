import * as action from '../Constants'
import { fork, all, takeLatest } from "redux-saga/effects";
import { LoginSaga } from './LoginSaga';
import { SignUpSaga } from './SignUpSaga';
import { AddPollSaga } from './AddPollSaga';
import { AllPollSaga } from './AllPollSaga';
import { RemovePollSaga } from './RemovePollSaga';
import { ProfileSaga } from './ProfileSaga';




function* LoginRootSaga() {
  yield takeLatest(action.LOGIN_REQUEST, LoginSaga);
}
function* signUpRootSaga() {
  yield takeLatest(action.SIGNUP_REQUEST, SignUpSaga);
}
function* ProfileRootSaga() {
  yield takeLatest(action.PROFILE_REQUEST, ProfileSaga);
}
function* AddPollRootSaga() {
  yield takeLatest(action.LOGIN_REQUEST, AddPollSaga);
}
function* AllPollRootSaga() {
  yield takeLatest(action.SIGNUP_REQUEST, AllPollSaga);
}
function* RemoveRootSaga() {
  yield takeLatest(action.REMOVE_POLL_REQUEST, RemovePollSaga);
}



export default function* rootSaga() {
  yield all([fork(LoginRootSaga) , fork(signUpRootSaga), fork(ProfileRootSaga), fork(AddPollRootSaga) , fork(AllPollRootSaga), fork(RemoveRootSaga)]);
}