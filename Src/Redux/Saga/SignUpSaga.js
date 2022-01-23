import { put, call } from "@redux-saga/core/effects";
import { signUpSuccess , signUpError } from "../Actions/Action";
import axios from "axios";

export function* SignUpSaga(action) {
  const url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${action.payload.username}&password=${action.payload.password}&role=${action.payload.role}`
  const apiCall = () => {
    return axios.post(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      yield put(signUpSuccess({ response: response }));
    } else {
      yield put(signUpError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(signUpError({ error: error }));
  }
} 