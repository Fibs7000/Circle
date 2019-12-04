//
//  Normal7
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, Image, View, Text } from "react-native"
import React from "react"


export default class Normal7 extends React.Component {

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
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 14,
							top: 147,
							height: 302,
							alignItems: "center",
						}}>
						<View
							style={styles.gruppe10021View}>
							<Text
								style={styles.bistDuDirSicherDText}>Bist du dir sicher das du einen Tisch {"\n"}reservieren möchtest?</Text>
							<View
								style={styles.gruppe9679View}>
								<View
									style={styles.gruppe9693View}>
									<Image
										source={require("../assets/images/gruppe-9698-2.png")}
										style={styles.gruppe9698Image}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.gruppe9692View}>
										<Text
											style={styles.beiText}>bei</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.kiboText}>KIBO</Text>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 30,
									marginTop: 10,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 126,
										height: 30,
									}}>
									<View
										style={styles.rechteck1656View}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 12,
											width: 97,
											top: 6,
											height: 17,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("../assets/images/calendar.png")}
											style={styles.calendarImage}/>
										<Text
											style={styles.textText}>28.06.2019 </Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 126,
										height: 30,
									}}>
									<View
										style={styles.rechteck17286View}/>
									<Text
										style={styles.textTwoText}>21:00</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.gruppe9679TwoView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 30,
									}}>
									<View
										style={styles.rechteck2View}/>
									<Text
										style={styles.personenText}>6 Personen</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 30,
									}}>
									<View
										style={styles.rechteck17282View}/>
									<Text
										style={styles.johannesRauchText}>Johannes Rauch</Text>
								</View>
							</View>
							<Text
								style={styles.abbrechenText}>Abbrechen</Text>
						</View>
						<View
							style={styles.gruppe9922View}>
							<View
								style={styles.gruppe9887View}>
								<Text
									style={styles.bestatigenText}>Bestätigen</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.gruppe9921View}>
								<Text
									style={styles.abbruchText}>Abbruch</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 115,
							right: 156,
							top: 269,
							height: 98,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("../assets/images/icon.png")}
							style={styles.iconImage}/>
						<Image
							source={require("../assets/images/user-5.png")}
							style={styles.userImage}/>
						<Image
							source={require("../assets/images/-icons---11-notebook.png")}
							style={styles.icons11NotebookImage}/>
					</View>
					<Image
						source={require("../assets/images/pfad-2768.png")}
						style={styles.pfad2768Image}/>
					<Image
						source={require("../assets/images/pfad-2767.png")}
						style={styles.pfad2767Image}/>
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
		color: "rgb(193, 192, 201)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
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
	gruppe10021View: {
		backgroundColor: "transparent",
		width: 261,
		height: 248,
	},
	bistDuDirSicherDText: {
		color: "rgb(119, 119, 119)",
		fontFamily: ".SFNSText",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		opacity: 0.76,
		marginLeft: 10,
		marginRight: 12,
	},
	gruppe9679View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 30,
		marginRight: 1,
		marginTop: 43,
		justifyContent: "center",
		alignItems: "center",
	},
	gruppe9693View: {
		backgroundColor: "transparent",
		width: 80,
		height: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	gruppe9698Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 20,
	},
	gruppe9692View: {
		backgroundColor: "transparent",
		width: 52,
		height: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	beiText: {
		backgroundColor: "transparent",
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	kiboText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	rechteck1656View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 126,
		top: 0,
		height: 30,
	},
	calendarImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 17,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 12,
		marginTop: 2,
	},
	rechteck17286View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 126,
		top: 0,
		height: 30,
	},
	textTwoText: {
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 40,
		top: 7,
	},
	gruppe9679TwoView: {
		backgroundColor: "transparent",
		height: 70,
		marginRight: 1,
		marginBottom: 5,
	},
	rechteck2View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 30,
	},
	personenText: {
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 8,
	},
	rechteck17282View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 30,
	},
	johannesRauchText: {
		backgroundColor: "transparent",
		color: "rgb(159, 159, 159)",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 80,
		bottom: 8,
	},
	abbrechenText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 33,
	},
	gruppe9922View: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 35,
		marginTop: 19,
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
	bestatigenText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 49,
	},
	gruppe9921View: {
		backgroundColor: "rgb(206, 28, 28)",
		borderRadius: 17.5,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 165,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
	},
	abbruchText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 20,
		height: 20,
	},
	userImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 15,
		marginLeft: 15,
		marginTop: 21,
	},
	icons11NotebookImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
		marginTop: 25,
	},
	pfad2768Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 164,
		width: 2,
		top: 273,
		height: 9,
	},
	pfad2767Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 160,
		width: 6,
		top: 280,
		height: 2,
	},
})
