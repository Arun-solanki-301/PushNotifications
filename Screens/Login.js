import React from "react";
import {View , Text ,  StyleSheet} from 'react-native'
import ButtonComponent from "../Components/ButtonComponent";

const Login = () => {
    return(
        <View>
            <ButtonComponent title = 'Login' styless = {{backgroundColor : "blue"}} textStyle={{fontSize : 25, textAlign  : "center" , color : "#fff"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonCompo : {
        backgroundColor : "red",
    },
   
    
})

export default Login;