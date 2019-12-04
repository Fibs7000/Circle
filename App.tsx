import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import "react-native-gesture-handler";
// import Welcome1 from './Views/Welcome2';
import Welcome1 from './Views/Tutorial2';
import Router from './Router';

const App = () => {
  return (
    <>
     <Router/>
    </>
  );
};

export default App;
