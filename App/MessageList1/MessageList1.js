//
//  MessageList1
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, View, Image, Text } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"


export default class MessageList1 extends React.Component {

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
						height: 562,
						marginTop: 11,
					}}>
					<View
						style={styles.navBarView}>
						<Text
							style={styles.messagesText}>Nachrichten </Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 8,
							right: 6,
							top: 93,
							height: 469,
						}}>
						<Image
							source={require("../assets/images/pfad-2516.png")}
							style={styles.pfad2516Image}/>
						<View
							style={styles.messageView}>
							<View
								style={styles.items1View}>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "flex-end",
										width: 60,
										height: 61,
									}}>
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
											source={require("../assets/images/oval-5-5.png")}
											style={styles.oval5Image}/>
									</View>
									<LinearGradient
										start={{
											x: 1,
											y: 0,
										}}
										end={{
											x: 0,
											y: 1,
										}}
										locations={[0, 1]}
										colors={["rgb(255, 137, 96)", "rgb(255, 98, 165)"]}
										style={styles.numberViewLinearGradient}>
										<View
											style={styles.numberView}>
											<Text
												style={styles.textText}>3</Text>
										</View>
									</LinearGradient>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										marginLeft: 20,
										marginTop: 9,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 26,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.hermanPopeText}>Herman Pope</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.amText}>04:04AM</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.heyHowSItGoingText}>Hey! How's it going?</Text>
								</View>
							</View>
							<View
								style={styles.items1CopyView}>
								<View
									pointerEvents="box-none"
									style={{
										width: 60,
										height: 61,
									}}>
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
											source={require("../assets/images/oval-5-3.png")}
											style={styles.oval5TwoImage}/>
									</View>
									<LinearGradient
										start={{
											x: 1,
											y: 0,
										}}
										end={{
											x: 0,
											y: 1,
										}}
										locations={[0, 1]}
										colors={["rgb(255, 137, 96)", "rgb(255, 98, 165)"]}
										style={styles.numberTwoViewLinearGradient}>
										<View
											style={styles.numberTwoView}>
											<Text
												style={styles.textTwoText}>1</Text>
										</View>
									</LinearGradient>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "stretch",
										marginLeft: 20,
										marginTop: 9,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 26,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.sueCaldwellText}>Sue Caldwell</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.pmText}>08:58PM</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.whatKindOfMusicDText}>What kind of music do you like? </Text>
								</View>
							</View>
							<View
								style={styles.items1Copy2View}>
								<Image
									source={require("../assets/images/oval-5-2.png")}
									style={styles.oval5ThreeImage}/>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "stretch",
										marginLeft: 20,
										marginTop: 9,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 26,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.adaReyesText}>Ada Reyes</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.pmTwoText}>11:33PM</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.soundsGoodToMeText}>Sounds good to me!</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 169,
								}}>
								<View
									style={styles.items1Copy3View}>
									<View
										pointerEvents="box-none"
										style={{
											height: 61,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("../assets/images/oval-5.png")}
											style={styles.oval5FourImage}/>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												height: 52,
												marginLeft: 20,
												marginTop: 9,
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 26,
													flexDirection: "row",
													alignItems: "flex-start",
												}}>
												<Text
													style={styles.hallieSandovalText}>Hallie Sandoval</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.pmThreeText}>06:58PM</Text>
											</View>
											<Text
												style={styles.hiTinaHowSYourText}>Hi Tina. How's your night going?</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.pmFourText}>09:43PM</Text>
								</View>
								<View
									style={styles.items1Copy4View}>
									<View
										pointerEvents="box-none"
										style={{
											height: 61,
											marginRight: 16,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("../assets/images/oval-5-4.png")}
											style={styles.oval5FiveImage}/>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												height: 49,
												marginLeft: 20,
												marginTop: 12,
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.deanWarrenText}>Dean Warren</Text>
											<Text
												style={styles.whatDidYouDoOverText}>What did you do over the weekend?</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/line.png")}
										style={styles.lineImage}/>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 6,
							width: 281,
							top: 190,
							height: 284,
							alignItems: "flex-end",
						}}>
						<Image
							source={require("../assets/images/line-2-copy.png")}
							style={styles.line2CopyImage}/>
						<Image
							source={require("../assets/images/line-2-copy-2.png")}
							style={styles.line2Copy2Image}/>
						<Image
							source={require("../assets/images/line-2-copy-2.png")}
							style={styles.line2Copy3Image}/>
						<Image
							source={require("../assets/images/line-2-copy-2.png")}
							style={styles.line2Copy4Image}/>
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
							source={require("../assets/images/message-circle-2.png")}
							style={styles.messageCircleImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("../assets/images/neaby-2.png")}
							style={styles.neabyImage}/>
						<Image
							source={require("../assets/images/user-3.png")}
							style={styles.userImage}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	navBarView: {
		backgroundColor: "white",
		shadowColor: "black",
		shadowRadius: 0.5,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 168,
		alignItems: "flex-start",
	},
	messagesText: {
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 100,
		marginTop: 42,
	},
	pfad2516Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
	},
	messageView: {
		backgroundColor: "transparent",
		height: 447,
		marginRight: 2,
		marginTop: 20,
	},
	items1View: {
		backgroundColor: "transparent",
		height: 61,
		marginRight: 14,
		flexDirection: "row",
	},
	oval5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
	},
	numberView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	numberViewLinearGradient: {
		borderRadius: 9,
		borderWidth: 1,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		left: 39,
		width: 20,
		bottom: 0,
		height: 20,
	},
	textText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginRight: 6,
	},
	hermanPopeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
	amText: {
		backgroundColor: "transparent",
		color: "rgb(78, 88, 110)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	heyHowSItGoingText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 263,
		marginRight: 2,
	},
	items1CopyView: {
		backgroundColor: "transparent",
		height: 61,
		marginRight: 14,
		marginTop: 32,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	oval5TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
	},
	numberTwoView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	numberTwoViewLinearGradient: {
		borderRadius: 9,
		borderWidth: 1,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		left: 39,
		width: 20,
		bottom: 0,
		height: 20,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 6,
		marginRight: 8,
	},
	sueCaldwellText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 3,
	},
	pmText: {
		color: "rgb(78, 88, 110)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
	},
	whatKindOfMusicDText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 263,
		marginRight: 2,
	},
	items1Copy2View: {
		backgroundColor: "transparent",
		height: 61,
		marginRight: 14,
		marginTop: 31,
		flexDirection: "row",
		alignItems: "center",
	},
	oval5ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 60,
		height: 60,
	},
	adaReyesText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
	pmTwoText: {
		backgroundColor: "transparent",
		color: "rgb(78, 88, 110)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	soundsGoodToMeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 263,
		marginRight: 2,
	},
	items1Copy3View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 14,
		bottom: 49,
		height: 120,
	},
	oval5FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
	},
	hallieSandovalText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 3,
	},
	pmThreeText: {
		backgroundColor: "transparent",
		color: "rgb(78, 88, 110)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	hiTinaHowSYourText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 263,
		marginRight: 2,
		marginTop: 3,
	},
	pmFourText: {
		color: "rgb(78, 88, 110)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
	},
	items1Copy4View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 76,
	},
	oval5FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
	},
	deanWarrenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	whatDidYouDoOverText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 263,
		marginTop: 3,
	},
	lineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 278,
		height: 1,
	},
	line2CopyImage: {
		backgroundColor: "transparent",
		opacity: 0.5,
		resizeMode: "cover",
		width: 281,
		height: 2,
	},
	line2Copy2Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.5,
		width: 281,
		height: 2,
		marginTop: 92,
	},
	line2Copy3Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.5,
		width: 281,
		height: 2,
		marginTop: 92,
	},
	line2Copy4Image: {
		backgroundColor: "transparent",
		opacity: 0.5,
		resizeMode: "cover",
		width: 281,
		height: 2,
		marginTop: 92,
	},
	gruppe216View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 71,
		marginBottom: 1,
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
	userImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 20,
	},
})
