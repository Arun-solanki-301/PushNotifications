import React from 'react';
import {View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const PollIcon = <Icon name="plus-circle" size={25} color="#fff" />
const AddPolls = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Add Your Poll Here</Text>
            <View style={styles.InputContainer}>
              <Text style={styles.label}>Question :</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>Option 1 :</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>Option 2 :</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>Option 3 :</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>Option 4 :</Text>
              <TextInput style={styles.Input} />

            <View style={styles.SignInButtonContainer}>
                <TouchableOpacity style={styles.SignInButton}>
                  {PollIcon}
                    <Text style={styles.SignInButtonText}>Add Poll</Text>
                </TouchableOpacity>
            </View>  
            </View>
        </View>
    )
}

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
    label : {
        fontSize : 16,
        color  :"#454545"
    },
    Input : {
        borderRadius :5,
        borderWidth : 1,
        borderColor : "#cccccc",
        fontSize : 16,
        color : "#454545",
        marginVertical : 8,
        backgroundColor : '#efefef'
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
})



export default AddPolls;