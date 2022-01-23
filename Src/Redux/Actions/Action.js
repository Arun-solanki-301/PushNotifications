import { createAction } from 'redux-actions'
import * as constant from '../Constants'


// login actions .......
export const loginRequest = createAction(constant.LOGIN_REQUEST)
export const loginSuccess = createAction(constant.LOGIN_SUCCESS)
export const loginError = createAction(constant.LOGIN_ERROR)


// signUp actions ......

export const signUpRequest = createAction(constant.SIGNUP_REQUEST)
export const signUpSuccess = createAction(constant.SIGNUP_SUCCESS)
export const signUpError = createAction(constant.SIGNUP_ERROR)


// user list actions ....

export const profileRequest = createAction(constant.PROFILE_REQUEST)
export const profileSuccess = createAction(constant.PROFILE_SUCCESS)
export const profileError = createAction(constant.PROFILE_ERROR)

// add poll actions .......
export const addPollRequest = createAction(constant.ADD_POLL_REQUEST)
export const addPollSuccess = createAction(constant.ADD_POLL_SUCCESS)
export const addPollError = createAction(constant.ADD_POLL_ERROR)


// all poll actions ......

export const allPollRequest = createAction(constant.ALL_POLL_REQUEST)
export const allPollSuccess = createAction(constant.ALL_POLL_SUCCESS)
export const allPollError = createAction(constant.ALL_POLL_ERROR)


// remove poll actions ....

export const removePollRequest = createAction(constant.REMOVE_POLL_REQUEST)
export const removePollSuccess = createAction(constant.REMOVE_POLL_SUCCESS)
export const removePollError = createAction(constant.REMOVE_POLL_ERROR)

// submit Poll action...

export const submitPollRequest = createAction(constant.SUBMIT_POLL_REQUEST)
export const submitPollSuccess = createAction(constant.SUBMIT_POLL_SUCCESS)
export const submitPollError = createAction(constant.SUBMIT_POLL_ERROR)