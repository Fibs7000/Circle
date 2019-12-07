import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> };

const Login = ({navigation}:props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.login}>Anmelden</Text>
            <Image style={{ alignSelf: "center" }}
				source={require("../assets/images/circleBlue.png")} />

			<Text
				style={styles.circleText}>CIRCLE</Text>
            <Input onChangeText={t=>setEmail(t)} value={email} placeholder="Email" />
            <Input onChangeText={t=>setPassword(t)} value={password} placeholder="Passwort" />
            <Button type="clear" style={{alignSelf: "flex-end"}}  title="Passwort vergessen?"
                //TODO:
            />
            <TouchableOpacity //TODO: 
				style={styles.rounButton}>
				<Text
					style={styles.roundButtonText}>Weiter</Text>
			</TouchableOpacity>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    circleText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 15,
		alignSelf: "center"
    },
    login: {
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.08,
		backgroundColor: "transparent",
		marginBottom: 30
    },
    rounButton: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		width: 255,
		height: 35,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center"
	},
	roundButtonText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent"
	},
})
