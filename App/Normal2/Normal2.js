//
//  Normal2
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"


export default class Normal2 extends React.Component {

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
						position: "absolute",
						left: 0,
						right: 0,
						top: 53,
						bottom: 1,
					}}>
					<Image
						source={require("../assets/images/icons---filled---settings.png")}
						style={styles.iconsFilledSetImage}/>
					<Image
						source={require("../assets/images/pfad-2473.png")}
						style={styles.pfad2473Image}/>
					<Text
						style={styles.jra2109Text}>Jra2109</Text>
					<Image
						source={require("../assets/images/pfad-2516.png")}
						style={styles.pfad2514Image}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 436,
							marginLeft: 8,
							marginRight: 6,
							marginTop: 26,
						}}>
						<View
							style={styles.gruppe10001View}>
							<View
								pointerEvents="box-none"
								style={{
									width: 173,
									height: 21,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/-icons---3-contact.png")}
									style={styles.icons3ContactImage}/>
								<Text
									style={styles.personlicheDatenText}>Persönliche Daten</Text>
							</View>
							<View
								style={styles.textView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										width: 135,
										top: 0,
										bottom: 0,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.johannesRauchText}>Johannes Rauch</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.textText}>06648338371</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Text
										style={styles.johannesRauch2121GText}>johannes.rauch2121@gmail.com</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 20,
									height: 101,
									marginLeft: 2,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/user.png")}
									style={styles.userImage}/>
								<Image
									source={require("../assets/images/mail.png")}
									style={styles.mailImage}/>
								<Image
									source={require("../assets/images/phone-2.png")}
									style={styles.phoneImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 201,
									height: 21,
									marginLeft: 2,
									marginTop: 49,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/icons---filled---lightning.png")}
									style={styles.iconsFilledLigImage}/>
								<Text
									style={styles.offentlicheAktivitaText}>Öffentliche Aktivitäten</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 23,
									marginLeft: 3,
									marginTop: 19,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.promoterText}>Promoter</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("../assets/images/gruppe-9998-2.png")}
									style={styles.gruppe9998Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 23,
									marginLeft: 3,
									marginTop: 18,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.geistmodusText}>Geistmodus</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("../assets/images/gruppe-9998-2.png")}
									style={styles.gruppe9998TwoImage}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.abmeldenText}>Abmelden</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 169,
								height: 148,
							}}>
							<Image
								source={require("../assets/images/pfad-2516.png")}
								style={styles.pfad2512Image}/>
							<Image
								source={require("../assets/images/pfad-2516.png")}
								style={styles.pfad2513Image}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.gruppe216View}>
						<View
							style={styles.gruppe9977View}>
							<View
								style={styles.roundHome24pxView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("../assets/images/bounding-boxes.png")}
										style={styles.boundingBoxesImage}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("../assets/images/rounded-2.png")}
										style={styles.roundedImage}/>
								</View>
							</View>
							<Image
								source={require("../assets/images/message-circle.png")}
								style={styles.messageCircleImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/neaby-2.png")}
								style={styles.neabyImage}/>
							<Image
								source={require("../assets/images/user-4.png")}
								style={styles.userTwoImage}/>
						</View>
					</View>
				</View>
				<Image
					source={require("../assets/images/elizeu-dias-520676-unsplash-2.png")}
					style={styles.elizeuDias520676UImage}/>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	iconsFilledSetImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 20,
		height: 20,
		marginRight: 32,
	},
	pfad2473Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.29)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "flex-start",
		width: 1,
		height: 1,
		marginTop: 25,
	},
	jra2109Text: {
		backgroundColor: "transparent",
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "center",
		marginTop: 96,
	},
	pfad2514Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
		marginLeft: 8,
		marginRight: 6,
		marginTop: 13,
	},
	gruppe10001View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		width: 335,
		top: 0,
		height: 436,
		alignItems: "flex-start",
	},
	icons3ContactImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 20,
		marginTop: 1,
	},
	personlicheDatenText: {
		backgroundColor: "transparent",
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 21,
	},
	textView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 258,
		height: 101,
		marginRight: 1,
		marginTop: 20,
	},
	johannesRauchText: {
		backgroundColor: "transparent",
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 15,
	},
	textText: {
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	johannesRauch2121GText: {
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	userImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 20,
	},
	mailImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 15,
		marginTop: 26,
	},
	phoneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 19,
		marginTop: 21,
	},
	iconsFilledLigImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 20,
		marginTop: 1,
	},
	offentlicheAktivitaText: {
		backgroundColor: "transparent",
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 25,
	},
	promoterText: {
		backgroundColor: "transparent",
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	gruppe9998Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 40,
		height: 21,
		marginTop: 2,
	},
	geistmodusText: {
		backgroundColor: "transparent",
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	gruppe9998TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 40,
		height: 21,
		marginTop: 2,
	},
	abmeldenText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	pfad2512Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
	},
	pfad2513Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
		marginTop: 144,
	},
	gruppe216View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 71,
		alignItems: "center",
	},
	gruppe9977View: {
		backgroundColor: "transparent",
		width: 300,
		height: 30,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	roundHome24pxView: {
		backgroundColor: "transparent",
		width: 25,
		height: 25,
	},
	boundingBoxesImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 25,
	},
	roundedImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 18,
		marginLeft: 3,
		marginRight: 3,
	},
	messageCircleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 20,
		marginLeft: 72,
	},
	neabyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
		marginRight: 62,
	},
	userTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 20,
	},
	elizeuDias520676UImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 122,
		top: 63,
		height: 122,
	},
})
