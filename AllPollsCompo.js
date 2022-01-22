import React from "react";
import {View , Text , TouchableOpacity , StyleSheet , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const TrashIcone = <Icon name="trash" size={25} color="red"  />
const CheckIcon = <Icon name="check-circle" size={25} color="#fff" />

const AllPollsCompo = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>All Polls</Text>
            <View style={styles.InputContainer}>

                <View style={styles.QuestionContainer}>
                    <Text style={styles.questionstyle}>Question here</Text>
                    <TouchableOpacity>
                        {TrashIcone}
                    </TouchableOpacity>
                </View>
                    <View style={styles.OptionContainer}>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.OptionBtn}>
                                <Text></Text>
                            </TouchableOpacity>
                            <Text style={styles.optionsText}>Option 1</Text>
                        </View>

                        <View style={styles.options}>
                            <TouchableOpacity style={styles.OptionBtn}>
                                <Text></Text>
                            </TouchableOpacity>
                            <Text style={styles.optionsText}>Option 2</Text>
                        </View>

                        <View style={styles.options}>
                            <TouchableOpacity style={styles.OptionBtn}>
                                <Text></Text>
                            </TouchableOpacity>
                            <Text style={styles.optionsText}>Option 3</Text>
                        </View>

                        <View style={styles.options}>
                            <TouchableOpacity style={styles.OptionBtn}>
                                <Text></Text>
                            </TouchableOpacity>
                            <Text style={styles.optionsText}>Option 4</Text>
                        </View>
                    </View>
             

            <View style={styles.SignInButtonContainer}>
                <TouchableOpacity style={styles.SignInButton}>
                  {CheckIcon}
                    <Text style={styles.SignInButtonText}>Submit Poll</Text>
                </TouchableOpacity>
            </View>  
            </View>
        </View>
    )
}

export default AllPollsCompo;

const styles = StyleSheet.create({
    container : {
        padding : 15
    },
    headerText :{
        textAlign : "center",
        fontSize : 25,
        color : "#454545"
    },
    InputContainer : {
        marginTop : 25,
    },
    QuestionContainer:{
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        backgroundColor : "#cccccc",
        borderRadius : 5,
        flexDirection : "row",
        paddingHorizontal : 15,
        borderRadius : 5,
        paddingVertical : 10
    },
    questionstyle :{
        width : '90%',
        fontSize : 20,
    },
    SignInButtonContainer : {
      display : "flex"
    },
    SignInButton :{
        backgroundColor : "#454545",
        padding :15,
        borderRadius : 5,
        marginVertical : 15,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "row",
  
    },
    SignInButtonText :{
        color : "#fff",
        textAlign : "center",
        fontSize : 16,
        marginLeft : 10
    },
    OptionContainer :{
        marginVertical : 15
    },
    options : {
        display : "flex",
        // justifyContent : "space-between",
        alignItems : "center",
        flexDirection : "row",
        marginVertical : 5
    },
    OptionBtn : {
        height : 25,
        width : 25,
        borderColor : "#cccccc",
        borderWidth : 1,
    },
    optionsText : {
        fontSize : 18,
        marginLeft : 10
    }

})


