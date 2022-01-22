import { put, call } from "@redux-saga/core/effects";
import { allPollSuccess , allPollError } from "../Actions/Action";
import axios from "axios";

export function* AllPollSaga(action) {
  console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/list_polls`
  const apiCall = () => {
    return axios.post(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      console.log(response)
      yield put(allPollSuccess({ response: response }));
    } else {
      yield put(allPollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(allPollError({ error: error }));
  }
} 