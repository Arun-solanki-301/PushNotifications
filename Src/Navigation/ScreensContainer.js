import React from "react";
import { SafeAreaView, View } from "react-native";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import SignUp from "../Screens/SignUp";
import AddPollls from '../Screens/AddPolls'
import AllPolls from '../Screens/AllPolls'
import OtpScreen from "../Screens/OtpScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const ScreensContainer = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="OtpScreen" component={OtpScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AddPollls" component={AddPollls} />
                <Stack.Screen name="Home" component={AllPolls} />
            </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


export default ScreensContainer;