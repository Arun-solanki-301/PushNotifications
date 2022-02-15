import React from "react";
import { SafeAreaView, View, Button, Text, Image } from "react-native";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import SignUp from "../Screens/SignUp";
import AddPollls from '../Screens/AddPolls'
import AllPolls from '../Screens/AllPolls'
import OtpScreen from "../Screens/OtpScreen";
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";


const logout = <Icon name="sign-out" size={35} color="#454545" />
const poll = <Icon name="plus-circle" size={35} color="#454545" />

const Stack = createStackNavigator();
const ScreensContainer = () => {

    const clearLocal = (nav) => {
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('username');
        nav.navigate("Login");
    }

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer >
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="OtpScreen" component={OtpScreen} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="AddPolls" component={AddPollls} />
                    <Stack.Screen name="Home" component={AllPolls} options={({ navigation }) => ({
                        // headerLeft: false,
                        headerRight: () => (
                            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", alignItems: "center", marginHorizontal: 15 }}>
                                <TouchableOpacity
                                    style={{ marginRight: 15 }}
                                    onPress={() => navigation.navigate('AddPolls')}
                                >
                                    {poll}
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => clearLocal(navigation)}
                                >
                                    {logout}
                                </TouchableOpacity>
                            </View>
                        ),
                            headerLeft: () => (
                                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                                <Image style={{ width: 40, height: 40, borderRadius: 50, marginHorizontal : 15 }} source={require("../../assets/img/profile.png")} />
                                </TouchableOpacity>
                              ),
            
                    })}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View >
    )
}


export default ScreensContainer;
