//
//  Welcome12
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Image, Text, StyleSheet, View } from "react-native"
import React from "react"


export default class Welcome12 extends React.Component {

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
						position: "absolute",
						left: 24,
						right: -84,
						top: 59,
						bottom: 113,
						alignItems: "flex-start",
					}}>
					<Image
						source={require("../assets/images/back-icon.png")}
						style={styles.backIconImage}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-end",
							width: 395,
							height: 291,
							marginTop: 53,
						}}>
						<Text
							style={styles.geratBestatigenBitText}>Gerät Bestätigen{"\n"}</Text>
						<Image
							source={require("../assets/images/gruppe-10072.png")}
							style={styles.gruppe10072Image}/>
						<Text
							style={styles.circleText}>CIRCLE</Text>
					</View>
					<Text
						style={styles.codeText}>Code</Text>
					<Image
						source={require("../assets/images/pfad-2523.png")}
						style={styles.pfad2524Image}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.gruppe9887View}>
						<Text
							style={styles.fertigStellenText}>Fertig stellen</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(250, 250, 250)",
		flex: 1,
	},
	registrierenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.08,
		position: "absolute",
		alignSelf: "center",
		top: 77,
	},
	backIconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	geratBestatigenBitText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 26,
		letterSpacing: 0.06,
		position: "absolute",
		alignSelf: "center",
		top: 187,
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
	circleText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 15,
		position: "absolute",
		right: 182,
		top: 124,
	},
	codeText: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.06,
		marginLeft: 25,
		marginTop: 33,
	},
	pfad2524Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-end",
		width: 301,
		height: 2,
		marginRight: 111,
		marginTop: 44,
	},
	gruppe9887View: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		alignSelf: "center",
		width: 255,
		height: 35,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	fertigStellenText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 86,
	},
})
