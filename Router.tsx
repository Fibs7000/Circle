import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation-tabs';
import moduleName, { createStackNavigator } from 'react-navigation-stack';

import Tutorial1 from "./Views/Tutorial1";
import Tutorial2 from "./Views/Tutorial2";
import Tutorial3 from "./Views/Tutorial3";
import Welcome1 from "./Views/Welcome1";
import Welcome2 from "./Views/Welcome2";
import Register from "./Views/Register";
import MainView from "./Views/MainView";
import ProfileView from "./Views/ProfileView";
import ExploreView from "./Views/ExploreView";
import AuthLoading from "./Views/AuthLoading";
import ChatView from "./Views/ChatView";
import Login from "./Views/Login";
import React from 'react'
import firebase from "firebase";

import { View, Image } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';


const tutorial = createMaterialTopTabNavigator({
    Tutorial1,
    Tutorial2,
    Tutorial3
},{
    swipeEnabled: true,
    tabBarComponent: (props => <View/>),
    
})

const home = createBottomTabNavigator({
    MainView: {
        screen: MainView,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<IconM name="home" size={30} color={tintColor} />)
        }
    },
    ChatView: {
        screen: ChatView,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<Image source={require("./assets/images/message-circle-2.png")} style={{tintColor}} />)
        }
    },
    ExploreView: {
        screen: ExploreView,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<Image source={require("./assets/images/neaby-2.png")} style={{tintColor}} />)
        }
    },
    ProfileView:{
        screen: ProfileView,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<IconM name="person" size={30} color={tintColor} />)
        }
    }
}, {
    tabBarOptions:{
        showIcon:true,
        showLabel: false
    },
});

const authStack = createStackNavigator({
    Welcome1,
    tutorial,
    Welcome2,
    Register,
    Login
},{
    headerMode: "none"
});

const root = createSwitchNavigator({
    auth: authStack,
    home,
    AuthLoading
},{
    initialRouteName: "AuthLoading"
})

export default createAppContainer(root);