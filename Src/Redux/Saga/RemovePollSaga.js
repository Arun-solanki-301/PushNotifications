import { put, call } from "@redux-saga/core/effects";
// import { loginSuccess , loginError } from "../Actions/actions";
import { removePollSuccess , removePollError } from "../Actions/Action";
import axios from "axios";

export function* RemovePollSaga(action) {
  console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${action.payload.id}`
  const apiCall = () => {
    return axios.post(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      console.log(response)
      yield put(removePollSuccess({ response: response }));
    } else {
      yield put(removePollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(removePollError({ error: error }));
  }
} 