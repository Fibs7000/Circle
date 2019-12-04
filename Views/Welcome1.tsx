//
//  Welcome5
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Image, StyleSheet, Text } from "react-native"
import React from "react"


export default class Welcome1 extends React.Component {

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
				<Image
					source={require("../assets/images/top.png")}
					style={styles.topImage}/>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginTop: 140,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 133,
							top: 161,
							bottom: 0,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.circleText}>CIRCLE</Text>
						<Text
							style={styles.searchingForUniqueText}>Searching for unique Events was never so easy </Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.contentView}>
							<View
								style={styles.gruppe9878View}>
								<View
									style={styles.gruppe9877View}>
									<Text
										style={styles.halloText}>Hallo!</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.woherKommstDuText}>Woher kommst du?</Text>
								</View>
								<View
									style={styles.buttonsView}>
									<View
										style={styles.buttonTwoView}>
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
												source={require("../assets/images/bg.png")}
												style={styles.bgThreeImage}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												alignSelf: "center",
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Text
												style={styles.osterreichText}>Österreich</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.buttonView}>
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
												source={require("../assets/images/bg.png")}
												style={styles.bgTwoImage}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												alignSelf: "center",
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Text
												style={styles.bestatigenText}>Bestätigen</Text>
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/bg-2.png")}
								style={styles.bgImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 260,
							width: 215,
							bottom: 77,
							height: 127,
							justifyContent: "flex-end",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("../assets/images/arrow.png")}
							style={styles.arrowImage}/>
						<View
							style={styles.indicatorView}/>
					</View>
					<Image
						source={require("../assets/images/gruppe-10072-2.png")}
						style={styles.gruppe10072Image}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(99, 175, 252)",
		flex: 1,
	},
	topImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 45,
	},
	circleText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSDisplay",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 15,
		marginRight: 186,
	},
	searchingForUniqueText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		width: 260,
		marginTop: 17,
	},
	contentView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 405,
		alignItems: "flex-end",
	},
	gruppe9878View: {
		backgroundColor: "transparent",
		width: 327,
		height: 227,
		marginRight: 110,
	},
	gruppe9877View: {
		backgroundColor: "transparent",
		height: 69,
		marginLeft: 6,
		marginRight: 5,
	},
	halloText: {
		color: "rgb(229, 229, 229)",
		fontFamily: ".SFNSText",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	woherKommstDuText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		width: 260,
	},
	buttonsView: {
		backgroundColor: "transparent",
		height: 120,
		marginTop: 38,
	},
	buttonTwoView: {
		backgroundColor: "transparent",
		height: 52,
	},
	bgThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 52,
	},
	osterreichText: {
		backgroundColor: "transparent",
		color: "rgb(2, 118, 254)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.06,
	},
	buttonView: {
		backgroundColor: "transparent",
		height: 52,
	},
	bgTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 52,
	},
	bestatigenText: {
		backgroundColor: "transparent",
		color: "rgb(2, 118, 254)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.06,
	},
	bgImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 1,
	},
	arrowImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 7,
		marginBottom: 117,
	},
	indicatorView: {
		backgroundColor: "white",
		opacity: 0.2,
		borderRadius: 1,
		alignSelf: "center",
		width: 134,
		height: 3,
	},
	gruppe10072Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		right: 0,
		width: 484,
		top: 0,
		height: 351,
	},
})
