import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { removePollRequest } from "../Redux/Actions/Action";
import OptionCompo from "./OptionsCompo";


const TrashIcone = <Icon name="trash" size={25} color="red" />
const CheckIcon = <Icon name="check-circle" size={25} color="#fff" />

const AllPollsCompo = (props) => {
    const {data} = props;
    const dispatch = useDispatch();

    const deletePoll = (id) =>{
        dispatch(removePollRequest({id : id}))
    }



    return (
        <View>
        {data?.map((item)=>{
            return(
            <View style={styles.InputContainer} key={item._id}>
                <View style={styles.QuestionContainer}>
                    <Text style={styles.questionstyle}>{item.title}</Text>
                    <TouchableOpacity onPress={()=>deletePoll(item._id)}>
                        {TrashIcone}
                    </TouchableOpacity>
                </View>
                <View style={styles.OptionContainer}>
                        <OptionCompo item={item.options} itemId = {item._id} />
                </View>
            </View>
            )
        })}
        </View>
        )
}

export default AllPollsCompo;

const styles = StyleSheet.create({
    InputContainer: {
        marginTop: 25,
    },
    QuestionContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#cccccc",
        borderRadius: 5,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderRadius: 5,
        paddingVertical: 10
    },
    questionstyle: {
        width: '90%',
        fontSize: 20,
    },
    SignInButtonContainer: {
        display: "flex"
    },
    SignInButton: {
        backgroundColor: "#454545",
        padding: 15,
        borderRadius: 5,
        marginVertical: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

    },
    SignInButtonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        marginLeft: 10
    },
    OptionContainer: {
        marginVertical: 15
    },
    options: {
        display: "flex",
        // justifyContent : "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 5
    },
    OptionBtn: {
        height: 25,
        width: 25,
        borderColor: "#cccccc",
        borderWidth: 1,
    },
    optionsText: {
        fontSize: 18,
        marginLeft: 10
    }

})
