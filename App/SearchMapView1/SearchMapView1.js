//
//  SearchMapView1
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { StyleSheet, Text, View, Image } from "react-native"


export default class SearchMapView1 extends React.Component {

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
									right: 77,
									top: 192,
									height: 120,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 83,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("../assets/images/coffee-1.png")}
										style={styles.coffee1CopyImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/coffee-1.png")}
										style={styles.coffee1Image}/>
								</View>
								<Image
									source={require("../assets/images/music.png")}
									style={styles.musicImage}/>
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
						right: -208,
						top: 0,
						bottom: 8,
					}}>
					<View
						style={styles.gruppe10003View}>
						<View
							style={styles.gruppe9908View}>
							<Image
								source={require("../assets/images/path-2.png")}
								style={styles.pathImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.stockholmText}>Stockholm</Text>
						</View>
					</View>
					<View
						style={styles.gruppe10092View}>
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
					<Text
						style={styles.textSixText}></Text>
					<Text
						style={styles.textFiveText}></Text>
					<Image
						source={require("../assets/images/coffee-1.png")}
						style={styles.coffee1Copy2Image}/>
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
				<Text
					style={styles.textSevenText}>🍽</Text>
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
	mapsThreeView: {
		width: "100%",
		height: "100%",
	},
	mapsThreeViewLinearGradient: {
		height: 812,
	},
	coffee1CopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 43,
		height: 43,
		marginTop: 40,
	},
	coffee1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 43,
		height: 43,
	},
	musicImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 18,
		height: 18,
		marginRight: 23,
		marginTop: 19,
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
		marginRight: 208,
		alignItems: "flex-start",
	},
	gruppe9908View: {
		backgroundColor: "transparent",
		width: 158,
		height: 32,
		marginLeft: 17,
		marginTop: 57,
		flexDirection: "row",
		alignItems: "center",
	},
	pathImage: {
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
	gruppe10092View: {
		backgroundColor: "transparent",
		height: 30,
		marginLeft: 9,
		marginTop: 20,
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
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	gruppe9924View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
		marginLeft: 11,
	},
	pfad2504Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
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
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 30,
	},
	friseurText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 27,
	},
	gruppe9925View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
	},
	pfad2505Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 30,
	},
	restaurantsText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 12,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	textSixText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 316,
		marginTop: 51,
	},
	textFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 91,
		marginTop: 26,
	},
	coffee1Copy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 43,
		height: 43,
		marginRight: 256,
		marginTop: 132,
	},
	barsHomeIndicatoView: {
		backgroundColor: "black",
		borderRadius: 2.5,
		alignSelf: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 20,
	},
	textSevenText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 55,
		top: 402,
	},
})
