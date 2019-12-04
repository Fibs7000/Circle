import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import moduleName, { createStackNavigator } from 'react-navigation-stack';

import Tutorial1 from "./Views/Tutorial1";
import Tutorial2 from "./Views/Tutorial2";
import Tutorial3 from "./Views/Tutorial3";
import Welcome1 from "./Views/Welcome1";
import Welcome2 from "./Views/Welcome2";
import Register from "./Views/Register";
import Login from "./Views/Login";
import React from 'react'

import { View } from 'react-native';


const tutorial = createMaterialTopTabNavigator({
    Tutorial1,
    Tutorial2,
    Tutorial3
},{
    swipeEnabled: true,
    tabBarComponent: (props => <View/>),
    
})

const authStack = createStackNavigator({
    Welcome1,
    tutorial,
    Welcome2,
    Register,
    Login
},{
    headerMode: "none"
});

export default createAppContainer(authStack);