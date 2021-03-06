
import { Text, Image, StyleSheet, View, KeyboardAvoidingView, Modal, ActivityIndicator } from "react-native"
import React, { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { AppState } from "../redux/store";
import { connect } from "react-redux";
import { signUp as signUpAction } from "../redux/auth";
import Animated from "react-native-reanimated";

const mapStateToProps = (state: AppState) => ({
	authError: state.auth.errors.signup,
	isSignedIn: !!state.auth.user,
	loading: state.auth.pending
})

const mapDispatchToProps = {
	signUp: signUpAction
}

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(({ navigation, authError, signUp, isSignedIn, loading }: props) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [reTypedPassword, setReTypedPassword] = useState("");
	const [telNr, setTelNr] = useState("");
	const passwordsEqual = password == reTypedPassword;
	const error = passwordsEqual ? "" : "Passwörter sind nicht gleich!!";
	isSignedIn && navigation.navigate("home");
	const canSignUp = name.length > 1 && lastName.length > 1 && email.length > 4 && password.length > 7 && telNr.length > 5;
	return <>
		<Modal visible={loading} transparent presentationStyle="overFullScreen">
			<View style={{ backgroundColor: "#fffb", flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator color="#0785F2" size={100}/>
			</View>
		</Modal>
		<KeyboardAvoidingView enabled behavior="height"
			style={styles.viewView}>
			<Text
				style={styles.registrierenText}>Registrieren</Text>
			<Image style={{ alignSelf: "center" }}
				source={require("../assets/images/circleBlue.png")} />

			<Text
				style={styles.circleText}>CIRCLE</Text>

			<View style={{ alignItems: "stretch", marginHorizontal: "5%", marginBottom: 20 }}>
				<Input onChangeText={text => setName(text)} value={name} placeholder="Vorname" autoCapitalize="words"/>
				<Input onChangeText={text => setLastName(text)} value={lastName} placeholder="Nachname"/>
				<Input onChangeText={text => setEmail(text)} value={email} placeholder="Email" autoCapitalize="none" autoCompleteType="email" />
				<Input onChangeText={text => setPassword(text)} value={password} placeholder="Passwort" autoCompleteType="password" autoCapitalize="none" secureTextEntry={true} />
				<Input onChangeText={text => setReTypedPassword(text)} value={reTypedPassword} errorMessage={error} autoCapitalize="none" autoCompleteType="password" placeholder="Passwort wiederholen" secureTextEntry={true} />
				<Input onChangeText={text => setTelNr(text)} value={telNr} placeholder="Telefonnummer" keyboardType="name-phone-pad" autoCompleteType="tel"/>
				{(!!authError) && <Text style={{ color: "#a00" }}>{authError}</Text>}
			</View>
			<TouchableOpacity onPress={() => {
				if (error)
					alert("Passwörter sind nicht ident!!");
				else if (!canSignUp)
					alert("Bitte alle Felder ausfüllen!");
				else
					signUp(email, password, name, lastName, telNr);
			}}
				style={styles.rounButton}>
				<Text
					style={styles.roundButtonText}>Weiter</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	</>
})

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(250, 250, 250)",
		flex: 1,
		justifyContent: "center",
		alignItems: "stretch",
	},
	registrierenText: {
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
	rechteck17284View: {
		backgroundColor: "white",
		borderRadius: 10,
		width: 300,
		height: 248,
		marginTop: 52,
	},
	vornameText: {
		backgroundColor: "transparent",
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 21,
	},
	pfad2522Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 2,
		height: 50,
		marginRight: 5,
	},
	nachnameText: {
		backgroundColor: "transparent",
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 21,
	},
	pfad2523Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 301,
		height: 2,
	},
	emailText: {
		backgroundColor: "transparent",
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 14,
		marginTop: 23,
	},
	pfad2524Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 301,
		height: 2,
		marginTop: 13,
	},
	passwortText: {
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 14,
		marginTop: 17,
	},
	pfad2525Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 301,
		height: 2,
		marginTop: 17,
	},
	passwortWiederholenText: {
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 14,
		marginTop: 17,
	},
	pfad2526Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 301,
		height: 2,
		marginTop: 19,
	},
	telefonnummerText: {
		backgroundColor: "transparent",
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 14,
		marginTop: 17,
	},
	gruppe10072Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 322,
		top: 0,
		height: 234,
	},
	rounButton: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		width: "70%",
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
