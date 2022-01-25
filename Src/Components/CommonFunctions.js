import AsyncStorage from '@react-native-async-storage/async-storage';


export const clearLocal = ({navigation}) =>{
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('username');
    navigation.navigate("Login");
  }