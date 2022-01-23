import { put, call } from "@redux-saga/core/effects";
import { addPollSuccess , addPollError } from "../Actions/Action";
import axios from "axios";

export function* AddPollSaga(action) {
  console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${action.payload.question}%20polll&options=${action.payload.option1}____${action.payload.option2}____${action.payload.option3}____${action.payload.option4}`
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