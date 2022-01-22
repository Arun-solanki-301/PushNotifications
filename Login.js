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

const Google = <Icon name="google" size={30} color="#fff" />
const Facebook = <Icon name="facebook" size={30} color="#fff" />
const signinalt = <Icon name="sign-in" size={25} color="#fff" />


function Login() {
 
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>

            <Text style={styles.headerText}> Sign in With</Text>
          <View style={styles.BtnContainer}>
              <TouchableOpacity style={styles.FButton}>
                {Facebook}
                  <Text style={styles.fButtonText}>Login with facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.GButton}>
                {Google}
                  <Text style={styles.fButtonText}>Login with Google</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.InputContainer}>
              <Text style={styles.label}>username</Text>
              <TextInput style={styles.Input} />

              <Text style={styles.label}>password</Text>
              <TextInput style={styles.Input} />

            <View style={styles.SignInButtonContainer}>
                <TouchableOpacity style={styles.SignInButton}>
                  {signinalt}
                    <Text style={styles.SignInButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

          </View>
          <View><TouchableOpacity><Text style={styles.SignupText}>Not a Mamber ? SignUp Now</Text></TouchableOpacity></View>
          <View><Text style={styles.SignupText}>OR</Text></View>
          <View><TouchableOpacity><Text style={styles.SignupText}>Sign in With mobile</Text></TouchableOpacity></View>


      </View>
    </View>
  );
}

export default Login;

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
  FButton : {
      backgroundColor :"#1877f2",
      width : "49%",
      paddingVertical : 10,
      paddingHorizontal : 15,
      borderRadius : 5,
      display : "flex",
      alignItems : "center",
      justifyContent : "space-around",
      flexDirection : "row"
  },
  GButton : {
    backgroundColor :"#CD5C5C",
    width : "49%",
    paddingVertical : 10,
    paddingHorizontal : 15,
    borderRadius : 5,
    display : "flex",
    alignItems : "center",
    justifyContent : "space-around",
    flexDirection : "row"
  },
  fButtonText : {
      color : '#fff',
      textAlign : "center",
      fontSize : 14
    
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
