import React from "react";
import { SafeAreaView, View, Button } from "react-native";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import SignUp from "../Screens/SignUp";
import AddPollls from '../Screens/AddPolls'
import AllPolls from '../Screens/AllPolls'
import OtpScreen from "../Screens/OtpScreen";
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const ScreensContainer = () => {
    
    const clearLocal = (nav) =>{
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
                    <Stack.Screen name="Home" component={AllPolls} options={({navigation}) => ({
                        headerLeft : false,
                        headerRight: () => (
                            <View style={{display : "flex", justifyContent :"space-around" , flexDirection : "row" , alignItems : "center" ,marginHorizontal : 15}}>
                            <Button
                                title="Add Poll"
                                color="#454545"
                                onPress={()=>navigation.navigate('AddPolls')}
                            />
                            <Button
                                title="logout"
                                color="#454545"
                                onPress={()=>clearLocal(navigation)}
                            />
                            </View>
                        )
                    })}
                        
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}


export default ScreensContainer;
