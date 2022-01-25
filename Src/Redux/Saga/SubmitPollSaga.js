import { put, call } from "@redux-saga/core/effects";
import { submitPollSuccess , submitPollError, allPollRequest } from "../Actions/Action";
import axios from "axios";

export function* SubmitPollSaga(action) {
    console.log(action.payload, "payloasdda")
  const url = `https://secure-refuge-14993.herokuapp.com/do_vote?id=${action.payload.id}&option_text=${action.payload.option}`
  const apiCall = () => {
    return axios.post(url, null, {
        headers: { access_token : action.payload.token },
      })
  }
  try {
    const response = yield call(apiCall);
    if (response) {
      yield put(submitPollSuccess({ response: response }));
      yield put(allPollRequest())
    } else {
      yield put(submitPollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(submitPollError({ error: error }));
  }
} 