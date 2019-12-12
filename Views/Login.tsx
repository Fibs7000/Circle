import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { AppState } from "../redux/store";
import { connect } from "react-redux";
import { signIn as sia } from '../redux/auth';
import firebase from 'firebase';

const mapStateToProps = (state: AppState) => ({
	authError: state.auth.errors.signin,
	isSignedIn: !!state.auth.user,
	loading: state.auth.pending
})

const mapDispatchToProps = {
	signIn: sia
}

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const enhance = connect(mapStateToProps, mapDispatchToProps);
const Login = ({ navigation, authError, signIn, isSignedIn, loading }: props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	isSignedIn && navigation.navigate("home");
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Modal visible={loading} transparent presentationStyle="overFullScreen">
				<View style={{ backgroundColor: "#fffb", flex: 1, justifyContent: "center", alignItems: "center" }}>
					<ActivityIndicator color="#0785F2" size={100} />
				</View>
			</Modal>
			<Text style={styles.login}>Anmelden</Text>
			<Image style={{ alignSelf: "center" }}
				source={require("../assets/images/circleBlue.png")} />

			<Text
				style={styles.circleText}>CIRCLE</Text>
			<Input onChangeText={t => setEmail(t)} value={email} placeholder="Email" autoCapitalize="none" autoCompleteType="email" keyboardType="email-address"/>
			<Input onChangeText={t => setPassword(t)} value={password} placeholder="Passwort" autoCapitalize="none" autoCompleteType="password" secureTextEntry={true} />
			<Text style={{ color: "#a00" }}>{authError}</Text>
			<Button type="clear" style={{ alignSelf: "flex-end" }} title="Passwort vergessen?"
				onPress={() => firebase.auth().sendPasswordResetEmail(email).then(() => alert("Passwort reset E-Mail wurde gesendet!")).catch(r => alert(r.message || r))}
			/>
			<TouchableOpacity onPress={() => signIn(email, password)}
				style={styles.rounButton}>
				<Text
					style={styles.roundButtonText}>Weiter</Text>
			</TouchableOpacity>
		</View>
	)
}

export default enhance(Login)


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
