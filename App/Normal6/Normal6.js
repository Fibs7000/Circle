//
//  Normal6
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { View, Image, StyleSheet, Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"


export default class Normal6 extends React.Component {

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
						source={require("../assets/images/bild-12-3.png")}
						style={styles.bild12Image}/>
					<Image
						source={require("../assets/images/-icons---close-copy-3-3.png")}
						style={styles.iconsCloseCopyImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 780,
					}}>
					<View
						style={styles.gruppe10014View}>
						<View
							pointerEvents="box-none"
							style={{
								height: 75,
								marginLeft: 7,
								marginRight: 43,
								marginTop: 15,
							}}>
							<View
								style={styles.nameView}>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 28,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.maryBurgessText}>Milkshake</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/filters.png")}
										style={styles.filtersImage}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.seattleUsaText}>Thalia </Text>
							</View>
							<Image
								source={require("../assets/images/avatar-2.png")}
								style={styles.avatarImage}/>
						</View>
						<Image
							source={require("../assets/images/pfad-2516.png")}
							style={styles.pfad2516Image}/>
					</View>
					<View
						style={styles.gruppe10019View}>
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
								style={styles.gruppe9684View}>
								<View
									style={styles.gruppe10020View}>
									<Text
										style={styles.nutritionistBioheText}>Wann:</Text>
									<View
										style={styles.gruppe9682View}>
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
												style={styles.symbol4913View}>
												<View
													style={styles.rechteck2View}/>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													style={styles.rechteck17285View}/>
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
													height: 17,
													marginLeft: 22,
													marginRight: 39,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("../assets/images/calendar.png")}
													style={styles.calendarImage}/>
												<Text
													style={styles.textText}>21.08.2019</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.textTwoText}>21:00</Text>
											</View>
										</View>
									</View>
									<Text
										style={styles.nutritionistBioheTwoText}>Personen: 4</Text>
									<View
										style={styles.symbol9614View}>
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
													x: 0.75,
													y: 0,
												}}
												end={{
													x: 0.14,
													y: 1,
												}}
												locations={[0, 1]}
												colors={["black", "rgb(132, 126, 126)"]}
												style={styles.rechteck1625ViewLinearGradient}>
												<View
													style={styles.rechteck1625View}/>
											</LinearGradient>
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
												style={styles.ellipse326View}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 7,
								width: 309,
								top: 206,
								height: 128,
								alignItems: "center",
							}}>
							<Text
								style={styles.nameJohannesRaucText}>Name:  Johannes Rauch</Text>
							<View
								style={styles.gruppe434View}>
								<Text
									style={styles.reservierenText}>Reservieren</Text>
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
										style={styles.gruppe9887View}>
										<Text
											style={styles.reservierenTwoText}>Reservieren</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<Image
						source={require("../assets/images/-icons---default---inactive.png")}
						style={styles.iconsDefaultIImage}/>
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
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 202,
	},
	iconsCloseCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 29,
		width: 18,
		top: 76,
		height: 16,
	},
	gruppe10014View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 780,
	},
	nameView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 308,
		top: 8,
		height: 57,
		alignItems: "flex-start",
	},
	maryBurgessText: {
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.23,
		backgroundColor: "transparent",
	},
	filtersImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 1,
		height: 6,
		marginTop: 16,
	},
	seattleUsaText: {
		backgroundColor: "transparent",
		color: "rgb(193, 192, 201)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	avatarImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 75,
		top: 0,
		height: 75,
	},
	pfad2516Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 2,
		marginLeft: 8,
		marginRight: 6,
		marginTop: 11,
	},
	gruppe10019View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 101,
		height: 512,
	},
	gruppe9684View: {
		backgroundColor: "transparent",
		height: 512,
		justifyContent: "center",
	},
	gruppe10020View: {
		backgroundColor: "white",
		height: 512,
		alignItems: "flex-start",
	},
	nutritionistBioheText: {
		color: "rgb(54, 54, 54)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginTop: 36,
	},
	gruppe9682View: {
		backgroundColor: "transparent",
		width: 260,
		height: 41,
		marginLeft: 6,
		marginTop: 17,
	},
	symbol4913View: {
		backgroundColor: "transparent",
		height: 41,
		flexDirection: "row",
		alignItems: "center",
	},
	rechteck2View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 125,
		height: 41,
	},
	rechteck17285View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 126,
		height: 41,
	},
	calendarImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
	},
	textText: {
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 9,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	nutritionistBioheTwoText: {
		color: "rgb(54, 54, 54)",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginTop: 14,
	},
	symbol9614View: {
		backgroundColor: "transparent",
		width: 291,
		height: 20,
		marginLeft: 13,
		marginTop: 26,
	},
	rechteck1625View: {
		width: "100%",
		height: "100%",
	},
	rechteck1625ViewLinearGradient: {
		borderRadius: 2.5,
		height: 5,
	},
	ellipse326View: {
		backgroundColor: "rgb(13, 13, 13)",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.51)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 21,
		height: 20,
		marginLeft: 42,
	},
	nameJohannesRaucText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	gruppe434View: {
		backgroundColor: "transparent",
		width: 255,
		height: 35,
		marginTop: 75,
	},
	reservierenText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 90,
		top: 17,
	},
	gruppe9887View: {
		backgroundColor: "rgb(7, 133, 242)",
		borderRadius: 17.5,
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
		marginLeft: 90,
	},
	iconsDefaultIImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 151,
		width: 20,
		top: 183,
		height: 20,
	},
})
