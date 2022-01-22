import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Userplus = <Icon name="user-plus" size={25} color="#fff" />


function SignUp() {
 
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>

            <Text style={styles.headerText}> SignUp Here</Text>
         
          <View style={styles.InputContainer}>
              <Text style={styles.label}>username</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>password</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>cinfirm password</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>Role</Text>
              <TextInput style={styles.Input} />

            <View style={styles.SignInButtonContainer}>
                <TouchableOpacity style={styles.SignInButton}>
                  {Userplus}
                    <Text style={styles.SignInButtonText}>SignUp</Text>
                </TouchableOpacity>
            </View>

          </View>
          <View><TouchableOpacity><Text style={styles.SignupText}>already a user? login instead</Text></TouchableOpacity></View>


      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "#000000aa"
  },
  formcontainer : {
      backgroundColor : "#fff",
      height : "75%",
      width : "90%",
      borderRadius : 5,
      paddingHorizontal : 25
  },
  BtnContainer : {
      display : 'flex',
      justifyContent  : "space-between",
      alignItems : 'center',
      flexDirection : "row"
  },
  headerText :{
      textAlign : "center",
      fontSize : 30,
      marginVertical : 25
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
  SignupText :{
      textAlign : "center",
      color : '#454545',
      fontSize : 16,
      marginVertical :5
  }
  
});
