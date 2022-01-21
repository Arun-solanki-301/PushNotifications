import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';


import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Login from './Screens/Login';




const App = () => {

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};
export default App;


// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25