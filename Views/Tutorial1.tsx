import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"
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
			<Image
				source={require("../assets/images/top.png")}
				style={styles.topImage} />
			<View
				pointerEvents="box-none"
				style={{
					height: 24,
					marginLeft: 24,
					marginRight: 36,
					marginTop: 14,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>
				<TouchableOpacity
				onPress={()=> navigation.navigate("Welcome1")}
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
				onPress={()=> navigation.navigate("Welcome2")}
				>

					<Text
						style={styles.uberspringenText}>Überspringen</Text>
				</TouchableOpacity>
			</View>
			<Image
				source={require("../assets/images/comment-regulation.png")}
				style={styles.commentRegulationImage} />
			<Image
				source={require("../assets/images/listing-dots.png")}
				style={styles.listingDotsImage} />
			<View
				style={{
					flex: 1,
				}} />
			<Text
				style={styles.sucheNachTopaktuelText}>Suche nach topaktuellen Events, Restaurants und Bars in deiner Nähe</Text>
		</View>
	</LinearGradient>
}

const styles = StyleSheet.create({
	viewView: {
		width: "100%",
		height: "100%",
	},
	viewViewLinearGradient: {
		flex: 1,
	},
	topImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 45,
	},
	backIconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	uberspringenText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.05,
		marginTop: 4,
	},
	commentRegulationImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 311,
		marginTop: 152,
	},
	listingDotsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 70,
		height: 10,
		marginTop: 21,
	},
	sucheNachTopaktuelText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		width: 260,
		marginBottom: 167,
	},
	indicatorView: {
		backgroundColor: "white",
		opacity: 0.2,
		borderRadius: 1,
		alignSelf: "center",
		width: 134,
		height: 3,
		marginBottom: 9,
	},
})
