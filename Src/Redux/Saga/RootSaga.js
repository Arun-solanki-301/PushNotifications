import * as constant from '../Constants'
import { fork, all, takeLatest } from "redux-saga/effects";
import {LoginSaga} from './LoginSaga'
import { SignUpSaga } from './SignUpSaga';
import { AddPollSaga } from './AddPollSaga';
import { AllPollSaga } from './AllPollSaga';
import { RemovePollSaga } from './RemovePollSaga';
import { ProfileSaga } from './ProfileSaga';
// import {SubmitPollSaga} from './SubmitPollSaga'




function* LoginRootSaga() {
  yield takeLatest(constant.LOGIN_REQUEST, LoginSaga);
}
function* signUpRootSaga() {
  yield takeLatest(constant.SIGNUP_REQUEST, SignUpSaga);
}
function* ProfileRootSaga() {
  yield takeLatest(constant.PROFILE_REQUEST, ProfileSaga);
}
function* AddPollRootSaga() {
  yield takeLatest(constant.ADD_POLL_REQUEST, AddPollSaga);
}
function* AllPollRootSaga() {
  yield takeLatest(constant.ALL_POLL_REQUEST, AllPollSaga);
}
function* RemoveRootSaga() {
  yield takeLatest(constant.REMOVE_POLL_REQUEST, RemovePollSaga);
}
// function* SubmitPollRootSaga() {
//   yield takeLatest(constant.SUBMIT_POLL_REQUEST, SubmitPollSaga);
// }



export default function* rootSaga() {
  yield all([fork(LoginRootSaga) , fork(signUpRootSaga), fork(ProfileRootSaga), fork(AddPollRootSaga) , fork(AllPollRootSaga), fork(RemoveRootSaga)]);
}