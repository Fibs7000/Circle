import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from "react-redux";
import { AppState } from '../redux/store';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

const mapStateToProps = (state: AppState) => ({
    pending: state.auth.pending,
    user: state.auth.user
})

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps>;
const AuthLoading = connect(mapStateToProps)(({ navigation, pending, user }: props) => {
    if (!pending) {
        console.log(pending);
        console.log(!!user);
        if (user)
            navigation.navigate("home")
        else
            navigation.navigate("auth");
    }

    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <ActivityIndicator color="#0785F2" size={100}/>
        </View>
    )
})

export default AuthLoading
