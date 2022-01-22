import React from "react";
import { SafeAreaView, View } from "react-native";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import SignUp from "../Screens/SignUp";
import AddPollls from '../Screens/AddPolls'
import AllPolls from '../Screens/AllPolls'
import OtpScreen from "../Screens/OtpScreen";

const ScreensContainer = () => {
    return(
        <View style={{flex : 1}}>
            <Login />
            {/* <SignUp /> */}
            {/* <Profile /> */}
            {/* <AddPollls /> */}
            {/* <AllPolls /> */}
            {/* <OtpScreen /> */}
        </View>
    )
}


export default ScreensContainer;