//
//  FeedFullList26
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"


export default class FeedFullList26 extends React.Component {

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
					style={styles.gruppe9978View}>
					<View
						style={styles.gruppe9979View}>
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
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.roundSearch24pxView}>
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
									style={styles.boundingBoxesTwoImage}/>
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
									source={require("../assets/images/rounded.png")}
									style={styles.roundedTwoImage}/>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("../assets/images/gruppe-9934.png")}
						style={styles.gruppe9934Image}/>
				</View>
				<View
					style={styles.gruppe10086View}>
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
							style={styles.gruppe10090View}>
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
														alignSelf: "center",
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
														source={require("../assets/images/pfad-2504-2.png")}
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
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Text
									style={styles.️Text}>✂</Text>
							</View>
						</View>
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
						<View
							pointerEvents="box-none"
							style={{
								height: 30,
								marginLeft: 245,
								marginRight: 117,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={styles.textFourText}>🍽</Text>
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
									style={styles.textThreeText}></Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.gruppe10040View}>
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
							style={styles.gruppe9997View}>
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
														source={require("../assets/images/bild-12-5.png")}
														style={styles.bild12Image}/>
													<View
														style={styles.gruppe9892View}>
														<View
															style={styles.ratingView}>
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
																<Text
																	style={styles.textText}>4.8</Text>
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
																<Image
																	source={require("../assets/images/star-2.png")}
																	style={styles.starImage}/>
															</View>
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
													<View
														style={styles.gruppe9900View}>
														<Text
															style={styles.dieGoldeneSchereText}>Die goldene Schere</Text>
														<View
															style={{
																flex: 1,
															}}/>
														<View
															style={styles.gruppe9887View}>
															<Text
																style={styles.reservierenText}>Reservieren</Text>
														</View>
													</View>
												</View>
											</View>
										</View>
										<View
											style={styles.gruppe9913View}>
											<Text
												style={styles.opernring12GrazText}>Opernring 12, Graz</Text>
											<Image
												source={require("../assets/images/path.png")}
												style={styles.pathTwoImage}/>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.gruppe447View}>
								<View
									style={styles.gruppe91View}>
									<Image
										source={require("../assets/images/guilherme-stecanella-587579-unsplash.png")}
										style={styles.guilhermeStecanellaImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.thaliaText}>Thalia</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.freitag2100Text}>Freitag 21:00</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.gruppe9900TwoView}>
						<View
							style={styles.gruppe10041View}>
							<Image
								source={require("../assets/images/user-5.png")}
								style={styles.userTwoImage}/>
							<Text
								style={styles.textTwoText}>10</Text>
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
									source={require("../assets/images/rounded-3.png")}
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
	gruppe9978View: {
		backgroundColor: "white",
		height: 104,
	},
	gruppe9979View: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 17,
		marginRight: 17,
		marginTop: 57,
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
	roundSearch24pxView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 25,
		height: 25,
		marginTop: 6,
	},
	boundingBoxesTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 25,
	},
	roundedTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 18,
		marginLeft: 3,
		marginRight: 4,
	},
	gruppe9934Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginLeft: 6,
		marginRight: 8,
	},
	gruppe10086View: {
		backgroundColor: "transparent",
		height: 30,
		marginRight: 8,
		marginTop: 19,
	},
	gruppe10090View: {
		backgroundColor: "transparent",
		height: 30,
	},
	gruppe9920View: {
		backgroundColor: "transparent",
		height: 30,
	},
	gruppe9930View: {
		backgroundColor: "transparent",
		width: 107,
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
		marginLeft: 1,
	},
	gruppe9923View: {
		backgroundColor: "transparent",
		width: 70,
		height: 13,
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
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 29,
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
		marginRight: 16,
	},
	️Text: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 67,
	},
	textFourText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	gruppe10087View: {
		backgroundColor: "transparent",
		width: 106,
		height: 30,
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
	textThreeText: {
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
	gruppe10040View: {
		backgroundColor: "transparent",
		height: 377,
		marginTop: 20,
	},
	gruppe9997View: {
		backgroundColor: "transparent",
		height: 377,
	},
	gruppe9905View: {
		backgroundColor: "transparent",
		height: 377,
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
	bild12Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
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
	},
	textText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 15,
	},
	starImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 15,
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
	gruppe9900View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 8,
		width: 308,
		bottom: 22,
		height: 91,
		alignItems: "flex-end",
	},
	dieGoldeneSchereText: {
		color: "rgb(21, 28, 42)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	gruppe9887View: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
		width: 255,
		height: 35,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	reservierenText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 90,
	},
	gruppe9913View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 22,
		width: 127,
		bottom: 71,
		height: 15,
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
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 14,
	},
	gruppe447View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 30,
		width: 335,
		top: 4,
		height: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe91View: {
		backgroundColor: "transparent",
		width: 79,
		height: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	guilhermeStecanellaImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 30,
		height: 30,
	},
	thaliaText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	freitag2100Text: {
		backgroundColor: "transparent",
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	gruppe9900TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 361,
		bottom: 5,
		height: 107,
	},
	gruppe10041View: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 33,
		height: 18,
		marginRight: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	userTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 15,
	},
	textTwoText: {
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
	pfad1073Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
	},
	gruppe216View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 71,
		marginBottom: 115,
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
})
