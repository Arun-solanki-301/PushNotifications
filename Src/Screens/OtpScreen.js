import React , { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';



const OtpScreen = ({navigation}) => {
  const [otpGenrate, setOptGenrate] = useState(true)

  const Genrate = () => {
    setOptGenrate(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <ScrollView>
        <Text style={styles.headerText} > Sign in Mobile</Text>
        {otpGenrate ? <View style={styles.InputContainer}>
          <TextInput style={styles.Input} placeholder='Mobile number' keyboardType='numeric' maxLength={10} />
          <View style={styles.SignInButtonContainer}>
            <TouchableOpacity style={styles.SignInButton} onPress={Genrate}>
              <Text style={styles.SignInButtonText}>Genrate Otp</Text>
            </TouchableOpacity>
          </View>
        </View>
          :
          <View style={styles.InputContainer}>
            <TextInput style={styles.Input} placeholder='Enter OTP Here' keyboardType='numeric' maxLength={4} />
            <View style={styles.SignInButtonContainer}>
              <TouchableOpacity style={styles.SignInButton}  onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.SignInButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        }

        <View><TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={styles.SignupText}>Not a Member ? SignUp Now</Text></TouchableOpacity></View>
        </ScrollView>

      </View>
    </View>
  );
}

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000000aa"
  },
  formcontainer: {
    backgroundColor: "#fff",
    height: "50%",
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 25
  },

  headerText: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 25,
    marginBottom: 10,
    color: "#454545"
  },
  InputContainer: {
    marginTop: 25,
  },
  label: {
    fontSize: 16,
    color: "#454545"
  },
  Input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    fontSize: 16,
    color: "#454545",
    marginVertical: 8,
    backgroundColor: '#efefef',
    paddingHorizontal: 10
  },
  SignInButtonContainer: {
    display: "flex"
  },
  SignInButton: {
    backgroundColor: "#454545",
    padding: 15,
    borderRadius: 5,
    marginVertical: 15
  },
  SignInButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  SignupText: {
    textAlign: "center",
    color: '#454545',
    fontSize: 16,
    marginVertical: 5
  },
  SignupText :{
    textAlign : "center",
    color : '#454545',
    fontSize : 16,
    marginVertical :5
}

});
