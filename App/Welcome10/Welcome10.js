//
//  Welcome10
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Text, Image, StyleSheet, View } from "react-native"
import React from "react"


export default class Welcome10 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<Text
					style={styles.registrierenText}>Registrieren</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 453,
						marginLeft: 37,
						marginTop: 36,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 120,
							width: 300,
							top: 124,
							height: 329,
							alignItems: "center",
						}}>
						<Text
							style={styles.circleText}>CIRCLE</Text>
						<View
							style={styles.rechteck17284View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 119,
							top: 205,
							height: 229,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 50,
								marginLeft: 14,
								marginRight: 92,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.vornameText}>Vorname</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/pfad-2522.png")}
								style={styles.pfad2522Image}/>
							<Text
								style={styles.nachnameText}>Nachname</Text>
						</View>
						<Image
							source={require("../assets/images/pfad-2523.png")}
							style={styles.pfad2523Image}/>
						<Text
							style={styles.emailText}>Email</Text>
						<Image
							source={require("../assets/images/pfad-2523.png")}
							style={styles.pfad2524Image}/>
						<Text
							style={styles.passwortText}>Passwort</Text>
						<Image
							source={require("../assets/images/pfad-2523.png")}
							style={styles.pfad2525Image}/>
						<Text
							style={styles.passwortWiederholenText}>Passwort wiederholen</Text>
						<Image
							source={require("../assets/images/pfad-2523.png")}
							style={styles.pfad2526Image}/>
						<Text
							style={styles.telefonnummerText}>Telefonnummer</Text>
					</View>
					<Image
						source={require("../assets/images/gruppe-10072.png")}
						style={styles.gruppe10072Image}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.gruppe9887View}>
					<Text
						style={styles.weiterText}>Weiter</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(250, 250, 250)",
		flex: 1,
		alignItems: "center",
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
		marginTop: 77,
	},
	circleText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 15,
		alignSelf: "flex-end",
		marginRight: 62,
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
	gruppe9887View: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		width: 255,
		height: 35,
		marginBottom: 113,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	weiterText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 106,
	},
})
