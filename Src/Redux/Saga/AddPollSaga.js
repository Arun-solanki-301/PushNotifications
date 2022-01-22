import { put, call } from "@redux-saga/core/effects";
import { addPollSuccess , addPollError } from "../Actions/Action";
import axios from "axios";

export function* AddPollSaga(action) {
  console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=first%20polll&options=opt1____opt2____opt3____opt4`
  const apiCall = () => {
    return axios.post(url)
  }
  try {
    const response = yield call(axios.post, url);
    if (response) {
      console.log(response)
      yield put(addPollSuccess({ response: response }));
    } else {
      yield put(addPollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(addPollError({ error: error }));
  }
} 