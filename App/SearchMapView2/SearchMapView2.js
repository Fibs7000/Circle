//
//  SearchMapView2
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient"


export default class SearchMapView2 extends React.Component {

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
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.mapsView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 812,
							}}>
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
									style={styles.mapsTwoView}>
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
											source={require("../assets/images/maps.png")}
											style={styles.mapsImage}/>
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
										<LinearGradient
											start={{
												x: 0.5,
												y: 0.15,
											}}
											end={{
												x: 0.5,
												y: 0.27,
											}}
											locations={[0, 1]}
											colors={["white", "rgba(255, 255, 255, 0.22)"]}
											style={styles.mapsThreeViewLinearGradient}>
											<View
												style={styles.mapsThreeView}/>
										</LinearGradient>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 79,
									right: 58,
									top: 192,
									height: 256,
									alignItems: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 83,
										marginRight: 11,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("../assets/images/coffee-1-copy.png")}
										style={styles.coffee1CopyImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/coffee-1-2.png")}
										style={styles.coffee1Image}/>
								</View>
								<Image
									source={require("../assets/images/music.png")}
									style={styles.musicImage}/>
								<Image
									source={require("../assets/images/coffee-1-2.png")}
									style={styles.coffee1Copy2Image}/>
							</View>
						</View>
						<Image
							source={require("../assets/images/ic-current.png")}
							style={styles.icCurrentImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: -54,
					}}>
					<View
						style={styles.gruppe10003View}>
						<View
							style={styles.gruppe9979View}>
							<View
								style={styles.gruppe9908View}>
								<Image
									source={require("../assets/images/path-2.png")}
									style={styles.pathTwoImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.stockholmText}>Stockholm</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.gruppe10004View}>
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
										source={require("../assets/images/rectangle.png")}
										style={styles.rectangleImage}/>
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
										source={require("../assets/images/icons---plus.png")}
										style={styles.iconsPlusImage}/>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 136,
							height: 14,
							marginLeft: 23,
							marginTop: 27,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("../assets/images/-icons---31-fire-2.png")}
							style={styles.icons31FireImage}/>
						<Image
							source={require("../assets/images/combined-shape.png")}
							style={styles.combinedShapeImage}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.modalsView}>
						<View
							style={styles.rectangleView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 14,
								right: 14,
								top: 10,
								bottom: 0,
							}}>
							<View
								style={styles.rectangleTwoView}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 169,
									height: 30,
									marginLeft: 1,
									marginTop: 13,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.sanFranciscoText}>Stockholm</Text>
								<Image
									source={require("../assets/images/ic-arrow-drop-down-24px.png")}
									style={styles.icArrowDropDown2Image}/>
							</View>
							<Text
								style={styles.found3247PlaceNeaText}>Found </Text>
							<View
								style={styles.items1View}>
								<View
									pointerEvents="box-none"
									style={{
										height: 91,
										marginLeft: 1,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("../assets/images/photos-1-2.png")}
										style={styles.photos1Image}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 127,
											height: 36,
											marginLeft: 15,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.andytownCoffeeText}>Milkshake</Text>
										<View
											style={styles.gruppe9913View}>
											<Text
												style={styles.opernring12GrazText}>Opernring 12, Graz</Text>
											<Image
												source={require("../assets/images/path.png")}
												style={styles.pathImage}/>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.kmText}>1.2 km</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("../assets/images/line-2.png")}
									style={styles.lineImage}/>
							</View>
							<View
								style={styles.items1CopyView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Text
										style={styles.reviewsText}>27 reviews</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 91,
											marginLeft: 1,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("../assets/images/photos-1-3.png")}
											style={styles.photos1TwoImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 243,
												height: 86,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.flywheelCoffeeRoasText}>Flywheel Coffee Roasters </Text>
											<Text
												style={styles.tristonLightsText}>3793 Triston Lights Apt. 229</Text>
											<Text
												style={styles.kmTwoText}>7 km</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/line-2.png")}
										style={styles.lineTwoImage}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.items1Copy2View}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Text
										style={styles.reviewsTwoText}>35 reviews</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 91,
											marginLeft: 1,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("../assets/images/photos-1.png")}
											style={styles.photos1ThreeImage}/>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												height: 86,
												marginLeft: 15,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.mazarineCoffeeText}>Mazarine Coffee</Text>
											<Text
												style={styles.tristonLightsTwoText}>3793 Triston Lights Apt. 229</Text>
											<Text
												style={styles.kmThreeText}>5 km</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/line-2.png")}
										style={styles.lineThreeImage}/>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 120,
						width: 135,
						top: 589,
						bottom: 8,
						alignItems: "center",
					}}>
					<Text
						style={styles.freitag2100Text}>Freitag 21:00</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.barsHomeIndicatoView}/>
				</View>
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
							source={require("../assets/images/neaby.png")}
							style={styles.neabyImage}/>
						<Image
							source={require("../assets/images/user-3.png")}
							style={styles.userImage}/>
					</View>
				</View>
				<View
					style={styles.gruppe10094View}>
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
							style={styles.gruppe9920View}>
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
									pointerEvents="box-none"
									style={{
										height: 30,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<View
										style={styles.gruppe9930View}>
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
												source={require("../assets/images/pfad-2504.png")}
												style={styles.pfad2511Image}/>
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
											<View
												style={styles.gruppe9923View}>
												<Image
													source={require("../assets/images/pfad-2508.png")}
													style={styles.pfad2508Image}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.eventsText}>Events</Text>
											</View>
										</View>
									</View>
									<View
										style={styles.gruppe9924View}>
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
												source={require("../assets/images/pfad-2504.png")}
												style={styles.pfad2504Image}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Text
												style={styles.barsText}>Bars</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.gruppe10087View}>
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
												style={styles.gruppe9926View}>
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
														source={require("../assets/images/pfad-2504.png")}
														style={styles.pfad2506TwoImage}/>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														right: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.clubsText}>Clubs</Text>
												</View>
											</View>
										</View>
										<Text
											style={styles.textText}></Text>
									</View>
									<View
										style={styles.gruppe10036View}>
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
												source={require("../assets/images/pfad-2504.png")}
												style={styles.pfad2506Image}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Text
												style={styles.friseurText}>Friseur</Text>
										</View>
									</View>
								</View>
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
								<View
									style={styles.gruppe9925View}>
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
											source={require("../assets/images/pfad-2504.png")}
											style={styles.pfad2505Image}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Text
											style={styles.restaurantsText}>Restaurants</Text>
									</View>
								</View>
							</View>
						</View>
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
						<View
							pointerEvents="box-none"
							style={{
								width: 242,
								height: 15,
								marginLeft: 18,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={styles.textTwoText}></Text>
							<Text
								style={styles.textThreeText}></Text>
							<Text
								style={styles.textFourText}>🍽</Text>
						</View>
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
	mapsView: {
		backgroundColor: "transparent",
		height: 812,
	},
	mapsTwoView: {
		backgroundColor: "transparent",
		height: 812,
	},
	mapsImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 812,
	},
	mapsThreeViewLinearGradient: {
		height: 812,
	},
	mapsThreeView: {
		width: "100%",
		height: "100%",
	},
	coffee1CopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 51,
		height: 43,
		marginTop: 40,
	},
	coffee1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 51,
		height: 43,
	},
	musicImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 18,
		marginRight: 42,
		marginTop: 19,
	},
	coffee1Copy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 51,
		height: 43,
		marginTop: 93,
	},
	icCurrentImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 80,
		top: 294,
		height: 80,
	},
	gruppe10003View: {
		backgroundColor: "white",
		height: 103,
		alignItems: "flex-start",
	},
	gruppe9979View: {
		backgroundColor: "transparent",
		width: 333,
		height: 38,
		marginLeft: 17,
		marginTop: 56,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe9908View: {
		backgroundColor: "transparent",
		width: 158,
		height: 32,
		flexDirection: "row",
		alignItems: "center",
	},
	pathTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 23,
	},
	stockholmText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	gruppe10004View: {
		backgroundColor: "transparent",
		width: 38,
		height: 38,
	},
	rectangleImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 10,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 38,
	},
	iconsPlusImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 16,
		marginLeft: 10,
		marginRight: 12,
	},
	icons31FireImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 14,
	},
	combinedShapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 13,
		marginLeft: 114,
	},
	modalsView: {
		backgroundColor: "transparent",
		height: 446,
	},
	rectangleView: {
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		borderRadius: 16,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 30,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 392,
	},
	rectangleTwoView: {
		backgroundColor: "rgb(216, 216, 216)",
		opacity: 0.5,
		borderRadius: 2,
		alignSelf: "center",
		width: 44,
		height: 4,
	},
	sanFranciscoText: {
		color: "rgb(38, 38, 40)",
		fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.38,
		backgroundColor: "transparent",
	},
	icArrowDropDown2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 48,
		marginTop: 6,
	},
	found3247PlaceNeaText: {
		color: "rgb(172, 177, 192)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.24,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 1,
		marginTop: 6,
	},
	items1View: {
		backgroundColor: "transparent",
		height: 109,
		marginTop: 18,
	},
	photos1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 88,
		height: 88,
		marginTop: 3,
	},
	andytownCoffeeText: {
		backgroundColor: "transparent",
		color: "rgb(30, 36, 50)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.39,
	},
	gruppe9913View: {
		backgroundColor: "transparent",
		width: 127,
		height: 15,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	opernring12GrazText: {
		backgroundColor: "transparent",
		color: "rgb(126, 142, 170)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginRight: 9,
	},
	pathImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 14,
	},
	kmText: {
		color: "rgb(172, 177, 192)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.32,
		backgroundColor: "transparent",
		marginTop: 70,
	},
	lineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 3,
		marginRight: 1,
	},
	items1CopyView: {
		backgroundColor: "transparent",
		height: 109,
		marginTop: 11,
	},
	reviewsText: {
		color: "rgb(30, 36, 50)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.3,
		backgroundColor: "transparent",
		marginRight: 100,
	},
	photos1TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 88,
		height: 88,
		marginTop: 3,
	},
	flywheelCoffeeRoasText: {
		backgroundColor: "transparent",
		color: "rgb(30, 36, 50)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.39,
		marginRight: 34,
	},
	tristonLightsText: {
		backgroundColor: "transparent",
		color: "rgb(172, 177, 192)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.32,
		width: 242,
		marginRight: 1,
		marginTop: 6,
	},
	kmTwoText: {
		backgroundColor: "transparent",
		color: "rgb(172, 177, 192)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.32,
		marginTop: 28,
	},
	lineTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 3,
		marginRight: 1,
	},
	items1Copy2View: {
		backgroundColor: "transparent",
		height: 109,
	},
	reviewsTwoText: {
		color: "rgb(30, 36, 50)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.3,
		backgroundColor: "transparent",
		marginRight: 99,
	},
	photos1ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 88,
		height: 88,
		marginTop: 3,
	},
	mazarineCoffeeText: {
		color: "rgb(30, 36, 50)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.39,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	tristonLightsTwoText: {
		color: "rgb(172, 177, 192)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.32,
		backgroundColor: "transparent",
		width: 242,
		marginRight: 1,
		marginTop: 6,
	},
	kmThreeText: {
		color: "rgb(172, 177, 192)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.32,
		backgroundColor: "transparent",
		marginTop: 28,
	},
	lineThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 3,
		marginRight: 1,
	},
	freitag2100Text: {
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	barsHomeIndicatoView: {
		backgroundColor: "black",
		borderRadius: 2.5,
		width: 135,
		height: 5,
	},
	gruppe216View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 1,
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 25,
	},
	roundedImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 18,
		marginLeft: 3,
		marginRight: 3,
	},
	messageCircleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 20,
		marginLeft: 72,
	},
	neabyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 30,
		marginRight: 62,
	},
	userImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 18,
		height: 20,
	},
	gruppe10094View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 9,
		right: -208,
		top: 122,
		height: 30,
	},
	gruppe9920View: {
		backgroundColor: "transparent",
		height: 30,
	},
	gruppe9930View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
	},
	pfad2511Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 30,
	},
	gruppe9923View: {
		backgroundColor: "transparent",
		width: 70,
		height: 13,
		marginLeft: 4,
		flexDirection: "row",
		alignItems: "center",
	},
	pfad2508Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 1,
		height: 3,
	},
	eventsText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	gruppe9924View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
		marginLeft: 11,
	},
	pfad2504Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 30,
	},
	barsText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 32,
	},
	gruppe10087View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
		marginRight: 11,
	},
	gruppe9926View: {
		backgroundColor: "transparent",
		height: 30,
	},
	pfad2506TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 30,
	},
	clubsText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 34,
	},
	textText: {
		color: "rgb(112, 112, 112)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 32,
		width: 24,
		top: 2,
	},
	gruppe10036View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
	},
	pfad2506Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 30,
	},
	friseurText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 27,
	},
	gruppe9925View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
	},
	pfad2505Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 30,
	},
	restaurantsText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 12,
	},
	textTwoText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	textThreeText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 117,
	},
	textFourText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 108,
	},
})
