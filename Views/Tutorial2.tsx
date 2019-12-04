import LinearGradient from "react-native-linear-gradient"
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native"
import React, { constructor } from "react"
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";


type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> };

export default ({ navigation }: props) => {

	return <LinearGradient
		start={{
			x: 0.48,
			y: 0.12,
		}}
		end={{
			x: 0.5,
			y: 0.6,
		}}
		locations={[0, 1]}
		colors={["rgb(99, 175, 252)", "rgb(70, 134, 228)"]}
		style={styles.viewViewLinearGradient}>
		<View
			style={styles.viewView}>
			<View
				pointerEvents="box-none"
				style={{
					position: "absolute",
					left: -83,
					right: -83,
					top: 0,
					bottom: 9,
				}}>
				<Image
					source={require("../assets/images/top.png")}
					style={styles.topImage} />
				<View
					pointerEvents="box-none"
					style={{
						height: 24,
						marginLeft: 107,
						marginRight: 119,
						marginTop: 14,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
					>
						<Image
							source={require("../assets/images/back-icon-2.png")}
							style={styles.backIconImage} />
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
						}} />
					<TouchableOpacity
						onPress={() => navigation.navigate("Welcome2")}
					>
						<Text
							style={styles.uberspringenText}>Überspringen</Text>
					</TouchableOpacity>
				</View>
				<View
					style={styles.gruppe9886View}>
					<View
						style={styles.teamView}>
						<Image
							source={require("../assets/images/window.png")}
							style={styles.windowImage} />
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 138,
								right: 109,
								top: 116,
								height: 169,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/tree.png")}
								style={styles.treeImage} />
							<View
								style={{
									flex: 1,
								}} />
							<Image
								source={require("../assets/images/plant.png")}
								style={styles.plantImage} />
						</View>
						<Image
							source={require("../assets/images/window-reflactions.png")}
							style={styles.windowReflactionsImage} />
						<View
							style={styles.guyOnChairView}>
							<Image
								source={require("../assets/images/pfad-2476.png")}
								style={styles.pfad2476Image} />
							<Image
								source={require("../assets/images/neck.png")}
								style={styles.neckImage} />
							<Image
								source={require("../assets/images/pfad-2479.png")}
								style={styles.pfad2479Image} />
							<Image
								source={require("../assets/images/gruppe-9887.png")}
								style={styles.gruppe9887Image} />
							<Image
								source={require("../assets/images/pfad-2480.png")}
								style={styles.pfad2480Image} />
							<View
								style={styles.shirtView}>
								<Image
									source={require("../assets/images/gruppe-9888.png")}
									style={styles.gruppe9888Image} />
								<Image
									source={require("../assets/images/shirt.png")}
									style={styles.shirtImage} />
							</View>
						</View>
						<Image
							source={require("../assets/images/guy-standin.png")}
							style={styles.guyStandinImage} />
						<Image
							source={require("../assets/images/girl-and-desk.png")}
							style={styles.girlAndDeskImage} />
					</View>
					<View
						style={{
							flex: 1,
						}} />
					<Image
						source={require("../assets/images/noise-layer.png")}
						style={styles.noiseLayerImage} />
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 10,
						marginLeft: 236,
						marginRight: 235,
						marginTop: 22,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("../assets/images/2-2.png")}
						style={styles.imageImage} />
					<View
						style={{
							flex: 1,
						}} />
					<View
						style={styles.viewTwoView} />
				</View>
				<View
					style={{
						flex: 1,
					}} />
				<Text
					style={styles.reserviereInDeinerText}>Reserviere in deiner Lieblingsbar ganz einfach und ohne großem Aufwand</Text>
			</View>
			<Image
				source={require("../assets/images/2.png")}
				style={styles.imageTwoImage} />
		</View>
	</LinearGradient>
}

const styles = StyleSheet.create({
	viewViewLinearGradient: {
		flex: 1,
	},
	viewView: {
		width: "100%",
		height: "100%",
	},
	topImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 45,
		marginLeft: 82,
		marginRight: 83,
	},
	backIconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	uberspringenText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.05,
		backgroundColor: "transparent",
		marginTop: 4,
	},
	gruppe9886View: {
		backgroundColor: "transparent",
		height: 355,
		marginTop: 107,
		alignItems: "flex-start",
	},
	teamView: {
		backgroundColor: "transparent",
		width: 457,
		height: 330,
		marginLeft: 19,
	},
	windowImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.2,
		position: "absolute",
		right: 10,
		width: 408,
		top: 20,
		height: 256,
	},
	treeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.3,
		width: 124,
		height: 169,
	},
	plantImage: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 68,
		height: 118,
		marginTop: 25,
	},
	windowReflactionsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 106,
		width: 177,
		top: 47,
		height: 85,
	},
	guyOnChairView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 165,
		top: 96,
		height: 166,
	},
	pfad2476Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 124,
		top: 46,
		height: 120,
	},
	neckImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 52,
		width: 53,
		top: 43,
		height: 69,
	},
	pfad2479Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 58,
		width: 43,
		top: 20,
		height: 47,
	},
	gruppe9887Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 53,
		width: 49,
		top: 0,
		height: 68,
	},
	pfad2480Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 58,
		width: 34,
		top: 44,
		height: 24,
	},
	shirtView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 124,
		top: 64,
		height: 95,
	},
	gruppe9888Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 19,
		right: 0,
		top: 8,
		height: 87,
	},
	shirtImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 103,
		top: 0,
		height: 89,
	},
	guyStandinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 92,
		width: 180,
		top: 0,
		height: 232,
	},
	girlAndDeskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 415,
		top: 34,
		height: 296,
	},
	noiseLayerImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 1,
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 10,
	},
	viewTwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		width: 10,
		height: 10,
	},
	reserviereInDeinerText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		width: 260,
		marginBottom: 166,
	},
	indicatorView: {
		backgroundColor: "white",
		opacity: 0.2,
		borderRadius: 1,
		alignSelf: "center",
		width: 134,
		height: 3,
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 10,
		top: 567,
		height: 10,
	},
})
