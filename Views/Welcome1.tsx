import { View, Image, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native"
import React from "react"
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

type props = {navigation: NavigationScreenProp<NavigationState, NavigationParams>};

export default ({navigation}: props) => {

	return <View
		style={styles.viewView}>
			
		<StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
		<View
			style={{
				flex: 1,
				marginTop: 70,
				alignItems: "stretch"
			}}>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Image
					source={require("../assets/images/circleWhite.png")}
					style={styles.gruppe10072Image} />
				<Text
					style={styles.circleText}>CIRCLE</Text>
				<Text
					style={styles.searchingForUniqueText}>Searching for unique Events was never so easy </Text>

				<View style={{ marginTop: 50 }} >
					<View style={styles.gruppe9878View}>
						<View >
							<Text style={styles.halloText}>Hallo!</Text>
							<Text style={styles.woherKommstDuText}>Woher kommst du?</Text>
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
										style={styles.bgThreeImage} />
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
								}} />
							<TouchableOpacity
								style={styles.buttonView} onPress={() => navigation.navigate("tutorial")}>
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
										style={styles.bgTwoImage} />
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
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	</View>
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(99, 175, 252)",
		flex: 1,
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
	gruppe9878View: {
		backgroundColor: "transparent",
		width: 327,
		height: 227
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
		right: 0,
		position: "absolute",
		width: 13,
		height: 7,
	},
	gruppe10072Image: {
		backgroundColor: "transparent",
		width: "100%",
		resizeMode: "center"
	},
})
