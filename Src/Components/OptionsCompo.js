import React, { useState , useEffect } from "react"
import {View , TouchableOpacity , Text , StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { submitPollRequest } from "../Redux/Actions/Action";

const CheckIcon = <Icon name="check-circle" size={25} color="#fff" />

const OptionCompo = (props) => {
    const [selectedOption , setSelectedOption] = useState("")
    const [asyncToken , setAsyncToken] = useState("")
    const {item , itemId} = props

    useEffect(()=>{
        const getUserName = async () => {
          try {
            const token = await AsyncStorage.getItem('token');
            setAsyncToken(token)
            }catch {
            console.log(error)
            }
        }
          getUserName();
    
      },[])
     
    const dispatch = useDispatch()


    const submitPoll = (id)=>{
        dispatch(submitPollRequest({
            option : selectedOption,
            id : id,
            token :  asyncToken
        }))
    }

    return (
        <View>
        {item?.map((elem , index)=>{
            return(
                <View style={styles.options} key={index}>
                <TouchableOpacity style={
                    selectedOption === elem.option ? styles.OptionBtnTrue : styles.OptionBtn
                  }
                  onPress={() => setSelectedOption(elem.option)}
                  >
                    <Text></Text>
                </TouchableOpacity>
                <Text style={styles.optionsText}>{elem.option}</Text>
            </View>
            )
        })
        }
        <View style={styles.SignInButtonContainer}>
                    <TouchableOpacity style={styles.SignInButton} disabled={!selectedOption} id={itemId} onPress={()=>submitPoll(itemId)}>
                        {CheckIcon}
                        <Text style={styles.SignInButtonText} onPress={submitPoll}>Submit Poll</Text>
                    </TouchableOpacity>
                </View>
        </View>


    



    )
}
export default OptionCompo

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
    OptionBtnTrue:{
        height: 25,
        width: 25,
        borderColor: "#cccccc",
        borderWidth: 1,
        backgroundColor : "green" 
    },
    optionsText: {
        fontSize: 18,
        marginLeft: 10
    }

})
