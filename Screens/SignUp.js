import React, { useState } from "react";
import {View , Text ,  StyleSheet, TextInput, Touchable, TouchableOpacity, SafeAreaView} from 'react-native'

const SignUp = () => {
    const [usersignUpDetails , setUsersignUpDetail] = useState({
        userName : "",
        password : "",
        confirmPassword : ""
    })

    const getUsersignUpDetails = (value , key)=>{
        setUsersignUpDetail({
            ...usersignUpDetails,
            [key] : value
        })
    }
    console.log(usersignUpDetails)
    return(
        <SafeAreaView style={styles.container}>
            <View><Text style={styles.signUpText}>signUp here</Text></View>
            <TextInput value={usersignUpDetails.userName} style={styles.textinput} placeholder="userName" onChangeText={(e)=>getUsersignUpDetails(e , "userName")} />
            <TextInput value={usersignUpDetails.password} style={styles.textinput} placeholder="password" onChangeText={(e)=>getUsersignUpDetails(e , "password")} />
            <TextInput value={usersignUpDetails.password} style={styles.textinput} placeholder="confirmPassword" onChangeText={(e)=>getUsersignUpDetails(e , "confirmPassword")} />
            <View style={styles.signUpBtnContainer}>
            <TouchableOpacity style={styles.signUpBtn}><Text style={styles.signUpBtnText}>signUp</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 15,
    },
    signUpText : {
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
    signUpBtn : {
        backgroundColor : "aqua",
        paddingVertical :15,
        borderRadius : 5,
        width :150
    },
    signUpBtnText : {
        fontSize : 20,
        textAlign : "center",
        color : "#fff"
    },
    signUpBtnContainer : {
        display :"flex",
        justifyContent : "center",
        alignItems : "center"
    }
   
    
})

export default SignUp;