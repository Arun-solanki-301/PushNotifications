import * as constant from '../Constants'


const InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  
};

const LoginReducer = (state = InitialState , action) => {
   
    switch (action.type) {
      case constant.LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
        };
        case constant.LOGIN_SUCCESS:
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          ...action.payload.response
        };
      case constant.LOGIN_ERROR:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          ...action.payload.error
        };
      default:
        return {
            ...state
        }
    }
  }

  export default LoginReducer;