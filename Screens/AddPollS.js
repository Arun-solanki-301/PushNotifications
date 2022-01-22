import React, { useState } from "react";
import {View , Text ,  StyleSheet, TextInput, Touchable, TouchableOpacity, SafeAreaView} from 'react-native'

const AddPoll = () => {
    const [AddPollDetails , setAddPollDetail] = useState({
        question : "",
        option1 : "",
        option2 : "",
        option3 : "",
        option4 : "",
    })

    const getAddPollDetails = (value , key)=>{
        setAddPollDetail({
            ...AddPollDetails,
            [key] : value
        })
    }
    console.log(AddPollDetails)
    return(
        <SafeAreaView style={styles.container}>
            <View><Text style={styles.AddPollText}>AddPoll here</Text></View>
            <TextInput value={AddPollDetails.question} style={styles.textinput} placeholder="question" onChangeText={(e)=>getAddPollDetails(e , "question")} />
            <TextInput value={AddPollDetails.option1} style={styles.textinput} placeholder="option1" onChangeText={(e)=>getAddPollDetails(e , "option1")} />
            <TextInput value={AddPollDetails.option2} style={styles.textinput} placeholder="option2" onChangeText={(e)=>getAddPollDetails(e , "option2")} />
            <TextInput value={AddPollDetails.option3} style={styles.textinput} placeholder="option3" onChangeText={(e)=>getAddPollDetails(e , "option3")} />
            <TextInput value={AddPollDetails.option4} style={styles.textinput} placeholder="option4" onChangeText={(e)=>getAddPollDetails(e , "option4")} />
            <View style={styles.AddPollBtnContainer}>
            <TouchableOpacity style={styles.AddPollBtn}><Text style={styles.AddPollBtnText}>AddPoll</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        margin : 15,
    },
    AddPollText : {
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
    AddPollBtn : {
        backgroundColor : "aqua",
        paddingVertical :15,
        borderRadius : 5,
        width :150
    },
    AddPollBtnText : {
        fontSize : 20,
        textAlign : "center",
        color : "#fff"
    },
    AddPollBtnContainer : {
        display :"flex",
        justifyContent : "center",
        alignItems : "center"
    }
   
    
})

export default AddPoll;