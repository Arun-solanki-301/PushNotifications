import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import {
  SafeAreaView,
} from 'react-native';
import ScreensContainer from './Src/Navigation/ScreensContainer';
import store from './Src/Redux/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
    <SafeAreaView style={{flex :1}}>
     <ScreensContainer />
    </SafeAreaView>
    </Provider>
  );
};
export default App;


// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25