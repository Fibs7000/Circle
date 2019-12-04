//
//  Welcome8
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, Image, View, Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import React from "react"


export default class Tutorial3 extends React.Component {

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
	
		return <LinearGradient
				start={{
					x: 0.48,
					y: 0.12,
				}}
				end={{
					x: 0.5,
					y: 0.6,
				}}
				locations={[0, 1]}
				colors={["rgb(99, 175, 252)", "rgb(70, 134, 228)"]}
				style={styles.viewViewLinearGradient}>
				<View
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -8,
							right: 0,
							top: 0,
							bottom: 9,
						}}>
						<Image
							source={require("../assets/images/top.png")}
							style={styles.topImage}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 24,
								marginLeft: 32,
								marginRight: 36,
								marginTop: 14,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/back-icon-2.png")}
								style={styles.backIconImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.uberspringenText}>Überspringen</Text>
						</View>
						<View
							style={styles.relaxView}>
							<Image
								source={require("../assets/images/background.png")}
								style={styles.backgroundImage}/>
							<Image
								source={require("../assets/images/programs.png")}
								style={styles.programsImage}/>
							<View
								style={styles.laptopView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: -0,
										right: 3,
										top: -0,
										height: 118,
										alignItems: "flex-end",
									}}>
									<Image
										source={require("../assets/images/front.png")}
										style={styles.frontImage}/>
									<Image
										source={require("../assets/images/table.png")}
										style={styles.tableImage}/>
								</View>
								<Image
									source={require("../assets/images/bottom.png")}
									style={styles.bottomImage}/>
								<Image
									source={require("../assets/images/back.png")}
									style={styles.backImage}/>
							</View>
							<View
								style={styles.messageView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("../assets/images/line-4.png")}
										style={styles.lineImage}/>
								</View>
								<Image
									source={require("../assets/images/rocket.png")}
									style={styles.rocketImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 18,
									width: 237,
									top: 19,
									height: 217,
									alignItems: "flex-start",
								}}>
								<View
									style={styles.clockView}>
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
											source={require("../assets/images/ellipse-4.png")}
											style={styles.ellipse4Image}/>
									</View>
									<Image
										source={require("../assets/images/shape-8.png")}
										style={styles.shape8Image}/>
								</View>
								<Image
									source={require("../assets/images/person.png")}
									style={styles.personImage}/>
							</View>
							<View
								style={styles.plantView}>
								<View
									style={styles.potView}>
									<Image
										source={require("../assets/images/shadow.png")}
										style={styles.shadowImage}/>
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
											source={require("../assets/images/ellipse-2.png")}
											style={styles.ellipse2Image}/>
									</View>
									<Image
										source={require("../assets/images/ellipse-1.png")}
										style={styles.ellipse1Image}/>
								</View>
								<View
									style={styles.leavesView}>
									<Image
										source={require("../assets/images/shape-2-3.png")}
										style={styles.shape2Image}/>
									<Image
										source={require("../assets/images/shape-2.png")}
										style={styles.shape2TwoImage}/>
									<Image
										source={require("../assets/images/shape-2-2.png")}
										style={styles.shape2ThreeImage}/>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 10,
								marginLeft: 161,
								marginRight: 152,
								marginTop: 74,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.viewTwoView}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.viewThreeView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.lehneDichZuruckUnText}>Lehne dich zurück und warte auf die Bestätigung deiner Reservation</Text>
						<View
							style={styles.gruppe9880View}>
							<Text
								style={styles.losGehtsText}>Los gehts</Text>
						</View>
						<View
							style={styles.indicatorView}/>
					</View>
					<Image
						source={require("../assets/images/2-2.png")}
						style={styles.imageImage}/>
				</View>
			</LinearGradient>
	}
}

const styles = StyleSheet.create({
	viewViewLinearGradient: {
		flex: 1,
	},
	viewView: {
		width: "100%",
		height: "100%",
	},
	topImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 45,
		marginLeft: 7,
	},
	backIconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	uberspringenText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.05,
		backgroundColor: "transparent",
		marginTop: 4,
	},
	relaxView: {
		backgroundColor: "transparent",
		height: 236,
		marginTop: 174,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		opacity: 0.12,
		resizeMode: "cover",
		position: "absolute",
		left: 19,
		right: 0,
		top: 0,
		height: 222,
	},
	programsImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 11,
		width: 57,
		top: 62,
		height: 65,
	},
	laptopView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 3,
		width: 75,
		top: 111,
		height: 118,
	},
	frontImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 51,
		height: 37,
	},
	tableImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.2,
		alignSelf: "stretch",
		width: null,
		height: 81,
	},
	bottomImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		right: 7,
		top: 35,
		height: 2,
	},
	backImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 51,
		top: 0,
		height: 38,
	},
	messageView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 311,
		top: 44,
		height: 119,
	},
	lineImage: {
		backgroundColor: "transparent",
		opacity: 0.5,
		resizeMode: "cover",
		width: 286,
		height: 119,
	},
	rocketImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 0,
		width: 32,
		top: 57,
		height: 29,
	},
	clockView: {
		backgroundColor: "transparent",
		opacity: 0.6,
		width: 32,
		height: 32,
		marginLeft: 8,
	},
	ellipse4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 32,
	},
	shape8Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 13,
		right: 8,
		top: 2,
		height: 23,
	},
	personImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 237,
		height: 183,
		marginTop: 2,
	},
	plantView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 18,
		width: 54,
		bottom: 5,
		height: 73,
	},
	potView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 6,
		bottom: 0,
		height: 27,
	},
	shadowImage: {
		backgroundColor: "transparent",
		opacity: 0.2,
		resizeMode: "center",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 8,
	},
	ellipse2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 23,
		marginLeft: 1,
	},
	ellipse1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 2,
		right: 2,
		top: 0,
		height: 8,
	},
	leavesView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 55,
	},
	shape2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 12,
		width: 20,
		top: 0,
		height: 49,
	},
	shape2TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 29,
		top: 23,
		height: 32,
	},
	shape2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 0,
		width: 26,
		top: 20,
		height: 35,
	},
	viewTwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		width: 10,
		height: 10,
	},
	viewThreeView: {
		backgroundColor: "rgb(162, 162, 162)",
		borderRadius: 5,
		width: 10,
		height: 10,
	},
	lehneDichZuruckUnText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		width: 260,
		marginBottom: 79,
	},
	gruppe9880View: {
		backgroundColor: "white",
		borderRadius: 21,
		shadowColor: "rgba(0, 0, 0, 0.21)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 109,
		height: 42,
		marginBottom: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	losGehtsText: {
		backgroundColor: "transparent",
		color: "rgb(99, 175, 252)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.05,
	},
	indicatorView: {
		backgroundColor: "white",
		opacity: 0.2,
		borderRadius: 1,
		alignSelf: "center",
		width: 134,
		height: 3,
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 10,
		top: 567,
		height: 10,
	},
})
