//
//  Normal8
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, Image, View, Text } from "react-native"
import React from "react"


export default class Normal8 extends React.Component {

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
						height: 202,
					}}>
					<Image
						source={require("../assets/images/bild-12-4.png")}
						style={styles.bild12Image}/>
					<Image
						source={require("../assets/images/pfad-2473.png")}
						style={styles.pfad2473Image}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
					}}>
					<View
						style={styles.gruppe10024View}>
						<View
							pointerEvents="box-none"
							style={{
								height: 90,
								marginLeft: 23,
								marginRight: 88,
								marginTop: 15,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/avatar.png")}
								style={styles.avatarImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 144,
									height: 51,
									marginTop: 24,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.thaliaText}>Thalia</Text>
								<Text
									style={styles.seattleUsaText}>Töglich: 16:00 - 24:00</Text>
							</View>
						</View>
						<Image
							source={require("../assets/images/pfad-2516.png")}
							style={styles.pfad2514Image}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 83,
								height: 21,
								marginLeft: 21,
								marginTop: 22,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/-icons---3-contact.png")}
								style={styles.icons3ContactImage}/>
							<Text
								style={styles.datenText}>Daten</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 67,
								marginLeft: 21,
								marginRight: 22,
								marginTop: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 20,
									height: 65,
									marginTop: 2,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/mail.png")}
									style={styles.mailImage}/>
								<Image
									source={require("../assets/images/phone-2.png")}
									style={styles.phoneImage}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.textView}>
								<Text
									style={styles.johannesRauch2121GText}>johannes.rauch2121@gmail.com</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.textText}>06648338371</Text>
							</View>
						</View>
						<Image
							source={require("../assets/images/pfad-2516.png")}
							style={styles.pfad2512Image}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 81,
								height: 18,
								marginLeft: 21,
								marginTop: 15,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/icons---filled---camera.png")}
								style={styles.iconsFilledCamImage}/>
							<Text
								style={styles.bilderText}>Bilder</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 152,
								marginLeft: 20,
								marginRight: 10,
								marginTop: 25,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/rectangle-copy-12.png")}
								style={styles.rectangleCopy12Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/rectangle-copy-14.png")}
								style={styles.rectangleCopy14Image}/>
							<Image
								source={require("../assets/images/rectangle-copy-15.png")}
								style={styles.rectangleCopy15Image}/>
						</View>
						<Image
							source={require("../assets/images/pfad-2516.png")}
							style={styles.pfad2518Image}/>
						<Image
							source={require("../assets/images/pfad-2516.png")}
							style={styles.pfad2520Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 18,
							bottom: 308,
						}}>
						<View
							style={styles.gruppe10026View}>
							<View
								style={styles.ratingTwoView}>
								<Text
									style={styles.textFourText}>4.8</Text>
								<Image
									source={require("../assets/images/star.png")}
									style={styles.starTwoImage}/>
							</View>
						</View>
						<View
							style={styles.gruppe10033View}>
							<Image
								source={require("../assets/images/gruppe-9698-2.png")}
								style={styles.gruppe9698Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.locationText}>Location</Text>
						</View>
						<Image
							source={require("../assets/images/bild-29.png")}
							style={styles.bild29Image}/>
						<View
							style={styles.gruppe10030View}>
							<Text
								style={styles.reservierenThreeText}>Reservieren</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.gruppe9905View}>
							<View
								style={styles.rechteck17275View}/>
							<View
								style={styles.gruppe9904View}>
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
									<View
										style={styles.gruppe9901View}>
										<View
											pointerEvents="box-none"
											style={{
												height: 202,
											}}>
											<Image
												source={require("../assets/images/bild-12-3.png")}
												style={styles.bild12TwoImage}/>
											<View
												style={styles.gruppe9892View}>
												<View
													style={styles.ratingView}>
													<Text
														style={styles.textTwoText}>4.8</Text>
													<Image
														source={require("../assets/images/star.png")}
														style={styles.starImage}/>
												</View>
											</View>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												height: 131,
												marginLeft: 14,
												marginRight: 15,
											}}>
											<Image
												source={require("../assets/images/pfad-2465-2.png")}
												style={styles.pfad2465Image}/>
											<Text
												style={styles.promoterText}>Promoter</Text>
										</View>
									</View>
								</View>
								<View
									style={styles.gruppe10037View}>
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
										<View
											style={styles.gruppe9900View}>
											<View
												pointerEvents="box-none"
												style={{
													height: 19,
													marginRight: 19,
													flexDirection: "row",
													alignItems: "flex-start",
												}}>
												<Text
													style={styles.milkshakeText}>Milkshake</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													style={styles.gruppe10041View}>
													<Image
														source={require("../assets/images/user-5.png")}
														style={styles.userImage}/>
													<Text
														style={styles.textThreeText}>10</Text>
												</View>
											</View>
											<View
												style={styles.gruppe9922View}>
												<View
													style={styles.gruppe9887View}>
													<Text
														style={styles.reservierenText}>Reservieren</Text>
												</View>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													style={styles.gruppe9921View}>
													<Text
														style={styles.promoterTwoText}>Promoter</Text>
												</View>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("../assets/images/pfad-2516.png")}
												style={styles.pfad1073Image}/>
										</View>
									</View>
									<View
										style={styles.gruppe9913View}>
										<Text
											style={styles.opernring12GrazText}>Opernring 12, Graz</Text>
										<Image
											source={require("../assets/images/path.png")}
											style={styles.pathImage}/>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.gruppe9905TwoView}>
						<View
							style={styles.rechteck17275TwoView}/>
						<View
							style={styles.gruppe9904TwoView}>
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
								<View
									style={styles.gruppe9901TwoView}>
									<View
										pointerEvents="box-none"
										style={{
											height: 202,
										}}>
										<Image
											source={require("../assets/images/bild-12-3.png")}
											style={styles.bild12ThreeImage}/>
										<View
											style={styles.gruppe9892TwoView}>
											<View
												style={styles.ratingThreeView}>
												<Text
													style={styles.textFiveText}>4.8</Text>
												<Image
													source={require("../assets/images/star.png")}
													style={styles.starThreeImage}/>
											</View>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 131,
											marginLeft: 14,
											marginRight: 15,
										}}>
										<Image
											source={require("../assets/images/pfad-2465-2.png")}
											style={styles.pfad2465TwoImage}/>
										<Text
											style={styles.promoterThreeText}>Promoter</Text>
									</View>
								</View>
							</View>
							<View
								style={styles.gruppe10037TwoView}>
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
									<View
										style={styles.gruppe9900TwoView}>
										<View
											pointerEvents="box-none"
											style={{
												height: 19,
												marginRight: 19,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.milkshakeTwoText}>Milkshake</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.gruppe10041TwoView}>
												<Image
													source={require("../assets/images/user-5.png")}
													style={styles.userTwoImage}/>
												<Text
													style={styles.textSixText}>10</Text>
											</View>
										</View>
										<View
											style={styles.gruppe9922TwoView}>
											<View
												style={styles.gruppe9887TwoView}>
												<Text
													style={styles.reservierenTwoText}>Reservieren</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.gruppe9921TwoView}>
												<Text
													style={styles.promoterFourText}>Promoter</Text>
											</View>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("../assets/images/pfad-2516.png")}
											style={styles.pfad1073TwoImage}/>
									</View>
								</View>
								<View
									style={styles.gruppe9913TwoView}>
									<Text
										style={styles.opernring12GrazTwoText}>Opernring 12, Graz</Text>
									<Image
										source={require("../assets/images/path.png")}
										style={styles.pathTwoImage}/>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.gruppe10023View}>
						<Image
							source={require("../assets/images/-icons---31-fire.png")}
							style={styles.icons31FireImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.eventsText}>Events</Text>
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
	bild12Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 202,
	},
	pfad2473Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.29)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		position: "absolute",
		left: 14,
		width: 1,
		top: 107,
		height: 1,
	},
	gruppe10024View: {
		backgroundColor: "white",
		position: "absolute",
		left: 42,
		right: 42,
		top: 0,
		height: 1866,
	},
	avatarImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 90,
		height: 90,
	},
	thaliaText: {
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 41,
	},
	seattleUsaText: {
		backgroundColor: "transparent",
		color: "rgb(193, 192, 201)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 9,
	},
	pfad2514Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
		marginLeft: 8,
		marginRight: 6,
		marginTop: 11,
	},
	icons3ContactImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 20,
		marginTop: 1,
	},
	datenText: {
		backgroundColor: "transparent",
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	mailImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 15,
	},
	phoneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 19,
		marginTop: 31,
	},
	textView: {
		backgroundColor: "transparent",
		width: 258,
		height: 60,
		alignItems: "flex-end",
	},
	johannesRauch2121GText: {
		backgroundColor: "transparent",
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	pfad2512Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
		marginLeft: 8,
		marginRight: 6,
		marginTop: 16,
	},
	iconsFilledCamImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 18,
	},
	bilderText: {
		backgroundColor: "transparent",
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	rectangleCopy12Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 105,
		height: 152,
	},
	rectangleCopy14Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 105,
		height: 152,
		marginRight: 15,
	},
	rectangleCopy15Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 105,
		height: 152,
	},
	pfad2518Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
		marginLeft: 8,
		marginRight: 6,
		marginTop: 17,
	},
	pfad2520Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 2,
		marginLeft: 8,
		marginRight: 6,
		marginTop: 330,
	},
	gruppe10026View: {
		backgroundColor: "white",
		borderRadius: 10,
		alignSelf: "flex-end",
		width: 50,
		height: 21,
		marginRight: 58,
		justifyContent: "center",
	},
	ratingTwoView: {
		backgroundColor: "transparent",
		height: 17,
		marginLeft: 7,
		marginRight: 6,
		flexDirection: "row",
		alignItems: "center",
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		flex: 1,
		marginRight: 1,
	},
	starTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 14,
	},
	gruppe10033View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 102,
		height: 20,
		marginLeft: 62,
		marginTop: 469,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe9698Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 20,
	},
	locationText: {
		backgroundColor: "transparent",
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	bild29Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 202,
		marginTop: 12,
	},
	gruppe10030View: {
		backgroundColor: "rgb(70, 134, 228)",
		borderRadius: 22,
		alignSelf: "center",
		width: 230,
		height: 44,
		marginTop: 22,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	reservierenThreeText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 78,
	},
	gruppe9905View: {
		backgroundColor: "transparent",
		height: 377,
		marginLeft: 28,
		marginRight: 27,
	},
	rechteck17275View: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 14,
		right: 15,
		top: 0,
		height: 50,
	},
	gruppe9904View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 44,
		height: 333,
	},
	gruppe9901View: {
		backgroundColor: "transparent",
		height: 333,
	},
	bild12TwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 202,
	},
	gruppe9892View: {
		backgroundColor: "white",
		borderRadius: 10,
		position: "absolute",
		right: 31,
		width: 50,
		top: 20,
		height: 21,
		justifyContent: "center",
	},
	ratingView: {
		backgroundColor: "transparent",
		height: 17,
		marginLeft: 7,
		marginRight: 6,
		flexDirection: "row",
		alignItems: "center",
	},
	textTwoText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 1,
	},
	starImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 14,
		height: 14,
	},
	pfad2465Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 131,
	},
	promoterText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		right: 67,
		bottom: 13,
	},
	gruppe10037View: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 361,
		bottom: 4,
		height: 108,
	},
	gruppe9900View: {
		backgroundColor: "transparent",
		height: 108,
	},
	milkshakeText: {
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	gruppe10041View: {
		backgroundColor: "transparent",
		width: 33,
		height: 18,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	userImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 15,
	},
	textThreeText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 5,
	},
	gruppe9922View: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 8,
		marginRight: 8,
		marginTop: 37,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe9887View: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		width: 165,
		height: 35,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	reservierenText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 46,
	},
	gruppe9921View: {
		backgroundColor: "rgb(235, 237, 240)",
		borderRadius: 17.5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 165,
		height: 35,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	promoterTwoText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 53,
	},
	pfad1073Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
	},
	gruppe9913View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 127,
		top: 27,
		height: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	opernring12GrazText: {
		color: "rgb(126, 142, 170)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 9,
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 14,
	},
	gruppe9905TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 28,
		right: 27,
		top: 837,
		height: 377,
	},
	rechteck17275TwoView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 14,
		right: 15,
		top: 0,
		height: 50,
	},
	gruppe9904TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 44,
		height: 333,
	},
	gruppe9901TwoView: {
		backgroundColor: "transparent",
		height: 333,
	},
	bild12ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 202,
	},
	gruppe9892TwoView: {
		backgroundColor: "white",
		borderRadius: 10,
		position: "absolute",
		right: 31,
		width: 50,
		top: 20,
		height: 21,
		justifyContent: "center",
	},
	ratingThreeView: {
		backgroundColor: "transparent",
		height: 17,
		marginLeft: 7,
		marginRight: 6,
		flexDirection: "row",
		alignItems: "center",
	},
	textFiveText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 1,
	},
	starThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 14,
	},
	pfad2465TwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 131,
	},
	promoterThreeText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 67,
		bottom: 13,
	},
	gruppe10037TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 361,
		bottom: 4,
		height: 108,
	},
	gruppe9900TwoView: {
		backgroundColor: "transparent",
		height: 108,
	},
	milkshakeTwoText: {
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	gruppe10041TwoView: {
		backgroundColor: "transparent",
		width: 33,
		height: 18,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	userTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 15,
	},
	textSixText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 5,
	},
	gruppe9922TwoView: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 8,
		marginRight: 8,
		marginTop: 37,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe9887TwoView: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		width: 165,
		height: 35,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	reservierenTwoText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 46,
	},
	gruppe9921TwoView: {
		backgroundColor: "rgb(235, 237, 240)",
		borderRadius: 17.5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 165,
		height: 35,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	promoterFourText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 53,
	},
	pfad1073TwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
	},
	gruppe9913TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 127,
		top: 27,
		height: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	opernring12GrazTwoText: {
		color: "rgb(126, 142, 170)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 9,
	},
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 14,
	},
	gruppe10023View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 63,
		width: 88,
		top: 843,
		height: 21,
		flexDirection: "row",
		alignItems: "center",
	},
	icons31FireImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 20,
	},
	eventsText: {
		color: "rgb(7, 133, 242)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
})
