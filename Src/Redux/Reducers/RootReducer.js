import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignUpReducer from "./SignUpReducer";
import AddPollReducer from "./AddPollReducer";
import AllPollReducer from "./AllPollReducer";
import RemovePollReducer from "./RemovePollReducer";
import ProfileReducer from "./ProfileReducer";
// import SubmitPollReducer from "./SumitPollReducer";

const rootReducer = combineReducers({
    LoginData : LoginReducer,
    SignUpData : SignUpReducer,
    UserListData : ProfileReducer,
    AddPollData : AddPollReducer,
    AllPollData : AllPollReducer,
    RemovePollData : RemovePollReducer,
    // SubmitPollData : SubmitPollReducer,
    
})  
export default rootReducer;