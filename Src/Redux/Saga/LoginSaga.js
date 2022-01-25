import { put, call } from "@redux-saga/core/effects";
import { loginSuccess , loginError } from '../Actions/Action'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function* LoginSaga(action) {
  console.log(action , 'actionsssssssss')
  const url = `https://secure-refuge-14993.herokuapp.com/login?username=${action.payload.name}&password=${action.payload.password}`

  const apiCall = () => {
    return axios.post(url)
  }

  const storage = async (userToken , userName)=>{
    try { 
      await AsyncStorage.setItem('token', String(userToken));
      await AsyncStorage.setItem('username', userName);
      
    } catch (error) {
      console.log(error)
    }
  }


  try {
    const response = yield call(axios.post, url);
    if (response) {
      console.log(response , "saga response")
      storage(response.data.token , action.payload.name );
      yield put(loginSuccess({ response: response }));
    } else {
      yield put(loginError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(loginError({ error: error }));
  }
}