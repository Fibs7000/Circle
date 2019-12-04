//
//  Welcome13
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, View, Image, Text } from "react-native"
import React from "react"


export default class Welcome13 extends React.Component {

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
					style={styles.anmeldenText}>Anmelden</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 305,
						marginTop: 32,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 565,
							right: 0,
							top: 0,
							height: 305,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 120,
								width: 300,
								top: 124,
								height: 181,
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
								width: 301,
								top: 229,
								height: 60,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.emailText}>Email</Text>
							<Image
								source={require("../assets/images/pfad-2523.png")}
								style={styles.pfad2523Image}/>
							<Text
								style={styles.passwortText}>Passwort</Text>
						</View>
						<Image
							source={require("../assets/images/gruppe-10072.png")}
							style={styles.gruppe10072Image}/>
					</View>
					<Image
						source={require("../assets/images/bg-2.png")}
						style={styles.bgImage}/>
				</View>
				<Text
					style={styles.passwortVergessenText}>Passwort vergessen?</Text>
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
	anmeldenText: {
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.08,
		backgroundColor: "transparent",
		marginTop: 81,
	},
	circleText: {
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 15,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 62,
	},
	rechteck17284View: {
		backgroundColor: "white",
		borderRadius: 10,
		width: 300,
		height: 100,
		marginTop: 52,
	},
	emailText: {
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
	},
	pfad2523Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 301,
		height: 2,
		marginTop: 14,
	},
	passwortText: {
		color: "rgb(190, 190, 190)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginTop: 20,
	},
	gruppe10072Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		right: 0,
		width: 322,
		top: 0,
		height: 234,
	},
	bgImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		width: 620,
		top: 5,
		height: 1,
	},
	passwortVergessenText: {
		color: "rgb(99, 175, 252)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 42,
		marginTop: 10,
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
