import { put, call } from "@redux-saga/core/effects";
import {profileSuccess , profileError} from '../Actions/Action'
import axios from "axios";

export function* ProfileSaga(action) {
  console.log(action)
  const url = "https://secure-refuge-14993.herokuapp.com/list_users"
  const apiCall = () => {
    return axios.get(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      yield put(profileSuccess({ response: response }));
    } else {
      yield put(profileError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(profileError({ error: error }));
  }
} 