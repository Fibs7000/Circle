//
//  Normal4
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, StyleSheet, Text, Image } from "react-native"
import React from "react"


export default class Normal4 extends React.Component {

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
						height: 1065,
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
						style={styles.gruppe10028View}>
						<View
							style={styles.contentsView}>
							<Image
								source={require("../assets/images/rectangle-copy-14.png")}
								style={styles.rectangleCopy14Image}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.asConsciousTraveliFiveText}>06648338371</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 138,
										height: 39,
										marginLeft: 30,
										marginTop: 9,
									}}>
									<Text
										style={styles.asConsciousTraveliTwoText}>Dienstag 10.09.2019</Text>
									<Text
										style={styles.asConsciousTraveliThreeText}>Ab 20:00</Text>
								</View>
								<Text
									style={styles.asConsciousTraveliFourText}>Allerheiligenweg 26</Text>
								<Text
									style={styles.aboutMeText}>About us</Text>
								<Text
									style={styles.asConsciousTraveliText}>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the host to your journey; without Her we could not find the unfolding adventures that attract and feed</Text>
								<Text
									style={styles.photosText}>Pictures</Text>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 152,
										marginRight: 1,
										marginTop: 7,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 105,
											height: 152,
										}}>
										<Image
											source={require("../assets/images/rectangle-copy-12.png")}
											style={styles.rectangleCopy12Image}/>
										<View
											style={styles.ovalView}/>
										<Image
											source={require("../assets/images/-icons---11-play.png")}
											style={styles.icons11PlayImage}/>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("../assets/images/rectangle-copy-15.png")}
										style={styles.rectangleCopy15Image}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.friendsText}>People there</Text>
								<Image
									source={require("../assets/images/group-3.png")}
									style={styles.group3Image}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.gruppe10029View}>
							<View
								style={styles.gruppe10017View}>
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
										source={require("../assets/images/gruppe-56.png")}
										style={styles.gruppe56Image}/>
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
										source={require("../assets/images/phone.png")}
										style={styles.phoneImage}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.gruppe10016View}>
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
										source={require("../assets/images/gruppe-56.png")}
										style={styles.gruppe56TwoImage}/>
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
										source={require("../assets/images/icons---line---message.png")}
										style={styles.iconsLineMessaImage}/>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 120,
							height: 875,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("../assets/images/20-handset-5.png")}
							style={styles.handset5Image}/>
						<Image
							source={require("../assets/images/calendar.png")}
							style={styles.calendarImage}/>
						<Image
							source={require("../assets/images/gruppe-9698.png")}
							style={styles.gruppe9698Image}/>
						<Text
							style={styles.friendsTwoText}>Location</Text>
						<Image
							source={require("../assets/images/bild-29.png")}
							style={styles.bild29Image}/>
						<Text
							style={styles.asConsciousTraveliSixText}>Allerheiligenweg 26</Text>
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
	iconsCloseCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 29,
		width: 18,
		top: 76,
		height: 16,
	},
	gruppe10014View: {
		backgroundColor: "white",
		position: "absolute",
		left: 42,
		right: 42,
		top: 0,
		height: 780,
	},
	nameView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 308,
		top: 8,
		height: 55,
		alignItems: "flex-start",
	},
	maryBurgessText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".SFNSDisplay",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.23,
	},
	filtersImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 1,
		height: 6,
		marginTop: 16,
	},
	seattleUsaText: {
		color: "rgb(193, 192, 201)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
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
	gruppe10028View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 57,
		right: 56,
		top: 121,
		height: 944,
		alignItems: "center",
	},
	contentsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 578,
	},
	rectangleCopy14Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 105,
		top: 310,
		height: 152,
	},
	asConsciousTraveliFiveText: {
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 138,
		marginLeft: 29,
	},
	asConsciousTraveliTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 138,
		top: 0,
	},
	asConsciousTraveliThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 138,
		top: 19,
	},
	asConsciousTraveliFourText: {
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 138,
		marginLeft: 30,
		marginTop: 17,
	},
	aboutMeText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 17,
	},
	asConsciousTraveliText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "stretch",
		marginRight: 1,
		marginTop: 6,
	},
	photosText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 29,
	},
	rectangleCopy12Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 105,
		top: 0,
		height: 152,
	},
	ovalView: {
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		borderRadius: 26,
		borderWidth: 1,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		left: 26,
		width: 54,
		top: 49,
		height: 54,
	},
	icons11PlayImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 40,
		width: 32,
		top: 60,
		height: 32,
	},
	rectangleCopy15Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 105,
		height: 152,
	},
	friendsText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 3,
	},
	group3Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 61,
	},
	gruppe10029View: {
		backgroundColor: "transparent",
		width: 230,
		height: 44,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe10017View: {
		backgroundColor: "transparent",
		width: 44,
		height: 44,
	},
	gruppe56Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 44,
	},
	phoneImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 19,
		marginLeft: 12,
		marginRight: 12,
	},
	gruppe10016View: {
		backgroundColor: "transparent",
		width: 44,
		height: 44,
	},
	gruppe56TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 44,
	},
	iconsLineMessaImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 20,
		marginLeft: 11,
		marginRight: 13,
	},
	handset5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 20,
		marginLeft: 57,
	},
	calendarImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
		marginLeft: 58,
		marginTop: 19,
	},
	gruppe9698Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 20,
		marginLeft: 57,
		marginTop: 30,
	},
	friendsTwoText: {
		color: "black",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 57,
		marginTop: 502,
	},
	bild29Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 202,
		marginTop: 9,
	},
	asConsciousTraveliSixText: {
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 138,
		marginTop: 13,
	},
})
