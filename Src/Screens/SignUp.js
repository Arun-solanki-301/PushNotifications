import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../Redux/Actions/Action';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   

const Userplus = <FontAwesome5 name="user-plus" size={25} color="#fff" />


const SignUp = ({navigation}) => {
  const [signUpInfo , setSignUpInfo] = useState({
    username : "",
    password : "",
    confirmPassword : "",
    role : ""
  });

  const data = useSelector(state => state);
  const dispatch = useDispatch();


  const userSignUpDetails = (key , value) => {
    setSignUpInfo({
      ...signUpInfo,
      [key] : value
    })
  }

  const userSignUp = () =>{
      dispatch(signUpRequest(signUpInfo))
      if(data.isSuccess){
        navigation.navigate('Login')
      }
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>

            <Text style={styles.headerText}> SignUp Here</Text>
         
          <ScrollView height={"100%"}>
          <View style={styles.InputContainer}>
              <Text style={styles.label} >username</Text>
              <TextInput style={styles.Input} onChangeText={(e)=>userSignUpDetails("username" , e)} />

              <Text style={styles.label}>password</Text>
              <TextInput style={styles.Input}  onChangeText={(e)=>userSignUpDetails("password" , e)} />

              <Text style={styles.label}>confirm password</Text>
              <TextInput style={styles.Input}  onChangeText={(e)=>userSignUpDetails("confirmPassword" , e)} />

              <Text style={styles.label}>Role</Text>
              <TextInput style={styles.Input}  onChangeText={(e)=>userSignUpDetails("role" , e)} />

            <View style={styles.SignInButtonContainer}>
                <TouchableOpacity style={styles.SignInButton} onPress={userSignUp}>
                  {Userplus}
                    <Text style={styles.SignInButtonText}>SignUp</Text>
                </TouchableOpacity>
            </View>

          </View>
          <View><TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={styles.SignupText}>already a user? login instead</Text></TouchableOpacity></View>


        </ScrollView>
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
      height : "90%",
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
      marginVertical : 15
  },
  InputContainer : {
      marginTop : 10,
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
