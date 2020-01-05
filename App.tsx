import React, { useEffect } from 'react';
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
import C from './Views/MainView';
import Router from './Router';
import firebase from "firebase";
import { Provider } from 'react-redux';
import { configureStore } from "./redux/store";
import { autoSignIn } from './redux/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBTgAdrSw9JhINt931KfjNortT13YCXTiE",
  authDomain: "circle-bd17b.firebaseapp.com",
  databaseURL: "https://circle-bd17b.firebaseio.com",
  projectId: "circle-bd17b",
  storageBucket: "circle-bd17b.appspot.com",
  messagingSenderId: "1053760659113",
  appId: "1:1053760659113:web:1e0196876b7d1503ad53b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = configureStore();
//@ts-ignore
store.dispatch(autoSignIn());

console.ignoredYellowBox = [
  'Setting a timer'
  ];
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
