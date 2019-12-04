//
//  InviteFriends
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Image, Text, StyleSheet } from "react-native"
import React from "react"


export default class InviteFriends extends React.Component {

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
					<Image
						source={require("../assets/images/bg-dark.png")}
						style={styles.bgDarkImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: -1,
						top: 0,
						height: 807,
					}}>
					<View
						style={styles.navBarView}>
						<View
							style={styles.barsStatusDefaView}>
							<Text
								style={styles.timeText}>9:41</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/container.png")}
								style={styles.containerImage}/>
						</View>
						<Image
							source={require("../assets/images/-icons---close-copy-3-2.png")}
							style={styles.iconsCloseCopyImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inviteFriendsText}>People there</Text>
					</View>
					<View
						style={styles.friendListView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 310,
							}}>
							<View
								style={styles.viewTwoView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										width: 199,
										top: 0,
										height: 131,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("../assets/images/userpic-4.png")}
										style={styles.userpicImage}/>
									<Text
										style={styles.patrickOsborneText}>Patrick Osborne</Text>
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
										source={require("../assets/images/line-3.png")}
										style={styles.lineImage}/>
								</View>
							</View>
							<View
								style={styles.viewThreeView}>
								<Text
									style={styles.calebKleinText}>Caleb Klein</Text>
								<Image
									source={require("../assets/images/line-5.png")}
									style={styles.lineTwoImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("../assets/images/rectangle-copy-2.png")}
									style={styles.rectangleCopy2Image}/>
							</View>
							<View
								style={styles.viewFourView}>
								<Text
									style={styles.loisConnerText}>Lois Conner</Text>
								<Image
									source={require("../assets/images/line-5.png")}
									style={styles.lineThreeImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("../assets/images/rectangle-copy-3.png")}
									style={styles.rectangleCopy3Image}/>
							</View>
							<View
								style={styles.viewFiveView}>
								<Text
									style={styles.jeromeGonzalesText}>Jerome Gonzales</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("../assets/images/line-5.png")}
									style={styles.lineFourImage}/>
							</View>
						</View>
						<View
							style={styles.viewSixView}>
							<View
								pointerEvents="box-none"
								style={{
									width: 199,
									height: 50,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 50,
										height: 50,
									}}>
									<Image
										source={require("../assets/images/userpic-3.png")}
										style={styles.userpicTwoImage}/>
									<Image
										source={require("../assets/images/rectangle-copy-4.png")}
										style={styles.rectangleCopy4Image}/>
								</View>
								<Text
									style={styles.edithOwenText}>Edith Owen</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/line-5.png")}
								style={styles.lineFiveImage}/>
						</View>
						<View
							style={styles.viewSevenView}>
							<View
								pointerEvents="box-none"
								style={{
									width: 199,
									height: 50,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 50,
										height: 50,
									}}>
									<Image
										source={require("../assets/images/userpic-5.png")}
										style={styles.userpicThreeImage}/>
									<Image
										source={require("../assets/images/rectangle-copy-5.png")}
										style={styles.rectangleCopy5Image}/>
								</View>
								<Text
									style={styles.stevenThorntonText}>Steven Thornton</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/line-5.png")}
								style={styles.lineSixImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.viewEightView}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 257,
									height: 50,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 50,
										height: 50,
									}}>
									<Image
										source={require("../assets/images/userpic-2.png")}
										style={styles.userpicFourImage}/>
									<Image
										source={require("../assets/images/rectangle-copy-6.png")}
										style={styles.rectangleCopy6Image}/>
								</View>
								<Text
									style={styles.brentFigueroaText}>Brent Figueroa</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/line-5.png")}
								style={styles.lineSevenImage}/>
						</View>
						<View
							style={styles.viewNineView}>
							<View
								pointerEvents="box-none"
								style={{
									width: 50,
									height: 50,
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
										source={require("../assets/images/userpic.png")}
										style={styles.userpicFiveImage}/>
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
									<Image
										source={require("../assets/images/rectangle-copy-7.png")}
										style={styles.rectangleCopy7Image}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.melvinBridgesText}>Melvin Bridges</Text>
						</View>
					</View>
				</View>
				<View
					style={styles.barsHomeIndicatoView}/>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgDarkImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 812,
	},
	navBarView: {
		backgroundColor: "white",
		shadowColor: "black",
		shadowRadius: 0.5,
		shadowOpacity: 1,
		height: 168,
		marginRight: 1,
		alignItems: "flex-start",
	},
	barsStatusDefaView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 18,
		marginLeft: 20,
		marginRight: 14,
		marginTop: 14,
		flexDirection: "row",
		alignItems: "center",
	},
	timeText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 54,
	},
	containerImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 67,
		height: 12,
	},
	iconsCloseCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 16,
		marginLeft: 21,
		marginTop: 26,
	},
	inviteFriendsText: {
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		marginLeft: 15,
		marginBottom: 9,
	},
	friendListView: {
		backgroundColor: "transparent",
		height: 617,
		marginLeft: 16,
		marginTop: 22,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 131,
	},
	userpicImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 50,
		height: 131,
	},
	patrickOsborneText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 134,
		marginLeft: 15,
		marginTop: 10,
	},
	lineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		width: null,
		height: 2,
		marginLeft: 1,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 91,
		height: 121,
		alignItems: "flex-start",
	},
	calebKleinText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 134,
		marginLeft: 65,
	},
	lineTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		alignSelf: "stretch",
		width: null,
		height: 2,
		marginLeft: 1,
		marginTop: 38,
	},
	rectangleCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
	},
	viewFourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 172,
		height: 121,
		alignItems: "flex-start",
	},
	loisConnerText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 134,
		marginLeft: 65,
	},
	lineThreeImage: {
		backgroundColor: "transparent",
		opacity: 0.2,
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 2,
		marginLeft: 1,
		marginTop: 38,
	},
	rectangleCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 50,
		height: 50,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 1,
		top: 253,
		height: 57,
		alignItems: "flex-start",
	},
	jeromeGonzalesText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 134,
		marginLeft: 65,
	},
	lineFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		alignSelf: "stretch",
		width: null,
		height: 2,
	},
	viewSixView: {
		backgroundColor: "transparent",
		height: 67,
		marginTop: 14,
		alignItems: "flex-start",
	},
	userpicTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 50,
		top: 0,
		height: 50,
	},
	rectangleCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 50,
		top: 0,
		height: 50,
	},
	edithOwenText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 134,
		marginLeft: 15,
		marginTop: 10,
	},
	lineFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		alignSelf: "stretch",
		width: null,
		height: 2,
		marginLeft: 1,
	},
	viewSevenView: {
		backgroundColor: "transparent",
		height: 67,
		marginTop: 14,
		alignItems: "flex-start",
	},
	userpicThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 50,
		top: 0,
		height: 50,
	},
	rectangleCopy5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 50,
		top: 0,
		height: 50,
	},
	stevenThorntonText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 134,
		marginLeft: 15,
		marginTop: 10,
	},
	lineSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		alignSelf: "stretch",
		width: null,
		height: 2,
		marginLeft: 1,
	},
	viewEightView: {
		backgroundColor: "transparent",
		height: 67,
		marginBottom: 14,
	},
	userpicFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 50,
		top: 0,
		height: 50,
	},
	rectangleCopy6Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 50,
		top: 0,
		height: 50,
	},
	brentFigueroaText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 192,
		marginLeft: 15,
		marginTop: 10,
	},
	lineSevenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		width: null,
		height: 2,
		marginLeft: 1,
	},
	viewNineView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 199,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	userpicFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
	},
	rectangleCopy7Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 50,
		height: 50,
	},
	melvinBridgesText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 134,
		marginTop: 10,
	},
	barsHomeIndicatoView: {
		backgroundColor: "white",
		borderRadius: 2.5,
		position: "absolute",
		alignSelf: "center",
		width: 135,
		bottom: 8,
		height: 5,
	},
})
