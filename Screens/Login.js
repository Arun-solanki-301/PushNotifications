import React, { useState } from "react";
import {View , Text ,  StyleSheet, TextInput, Touchable, TouchableOpacity, SafeAreaView} from 'react-native'

const Login = () => {
    const [userLoginDetails , setUserLoginDetail] = useState({
        userName : "",
        password : ""
    })

    const getUserLoginDetails = (value , key)=>{
        setUserLoginDetail({
            ...userLoginDetails,
            [key] : value
        })
    }
    console.log(userLoginDetails)
    return(
        <SafeAreaView style={styles.container}>
            <View><Text style={styles.LoginText}>Login here</Text></View>
            <TextInput value={userLoginDetails.userName} style={styles.textinput} placeholder="userName" onChangeText={(e)=>getUserLoginDetails(e , "userName")} />
            <TextInput value={userLoginDetails.password} style={styles.textinput} placeholder="password" onChangeText={(e)=>getUserLoginDetails(e , "password")} />
            <View style={styles.LoginBtnContainer}>
            <TouchableOpacity style={styles.LoginBtn}><Text style={styles.LoginBtnText}>Login</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 15,
    },
    LoginText : {
        textAlign : "center",
        fontSize : 22,
        color : "aqua",
        marginBottom :30
    },
    textinput : {
        borderColor : "#cccccc",
        borderWidth : 2,
        borderRadius : 5,
        marginBottom :10,
        paddingHorizontal : 15
    },
    LoginBtn : {
        backgroundColor : "aqua",
        paddingVertical :15,
        borderRadius : 5,
        width :150
    },
    LoginBtnText : {
        fontSize : 20,
        textAlign : "center",
        color : "#fff"
    },
    LoginBtnContainer : {
        display :"flex",
        justifyContent : "center",
        alignItems : "center"
    }
   
    
})

export default Login;