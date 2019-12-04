//
//  Normal3
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"


export default class Normal3 extends React.Component {

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
				<View
					pointerEvents="box-none"
					style={{
						width: 224,
						height: 21,
						marginLeft: 15,
						marginTop: 63,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("../assets/images/-icons---close-copy-3.png")}
						style={styles.iconsCloseCopyImage}/>
					<Text
						style={styles.einstellungenText}>Einstellungen</Text>
				</View>
				<Image
					source={require("../assets/images/pfad-2473.png")}
					style={styles.pfad2473Image}/>
				<Text
					style={styles.kontoText}>Konto</Text>
				<Text
					style={styles.benachrichtigungenText}>Benachrichtigungen</Text>
				<Text
					style={styles.passwortText}>Passwort</Text>
				<Text
					style={styles.infoText}>Info</Text>
				<Text
					style={styles.hilfeText}>Hilfe</Text>
				<Image
					source={require("../assets/images/lock.png")}
					style={styles.lockImage}/>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-start",
	},
	iconsCloseCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 16,
		marginTop: 4,
	},
	einstellungenText: {
		backgroundColor: "transparent",
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 98,
	},
	pfad2473Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.29)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 1,
		height: 1,
		marginTop: 14,
	},
	kontoText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 24,
		marginTop: 34,
	},
	benachrichtigungenText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 24,
		marginTop: 22,
	},
	passwortText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 24,
		marginTop: 22,
	},
	infoText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 24,
		marginTop: 22,
	},
	hilfeText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 24,
		marginTop: 22,
	},
	lockImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 16,
		marginLeft: 22,
		marginTop: 279,
	},
})
