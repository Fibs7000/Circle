import React, { useState } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, Switch } from 'react-native'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { Button, Avatar, Icon } from 'react-native-elements';
import IconText from './IconText';
import { ScrollView } from 'react-native-gesture-handler';
import { AppState } from "../redux/store";
import { connect } from "react-redux";
import { signOut } from '../redux/auth';

const mapStateToProps = (state: AppState) => ({
	user: state.auth.user
})

const mapDispatchToProps = {
	dispatchLogOut: signOut
}

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const enhance = connect(mapStateToProps, mapDispatchToProps);
const ProfileView = ({ user, navigation, dispatchLogOut }: props) => {
	if (!user) {
		navigation.navigate("auth");
		return null;
	}
	const pbImage = require("../assets/images/elizeu-dias-520676-unsplash-2.png");
	const username = "notImplemented";
	const name = user.firstName + " " + user.name;
	const email = user.email;
	const telnr = user.telNr;
	const [ghostMode, setGhostMode] = useState(false); //TODO: implement functionality
	const [promoter, setPromoter] = useState(false);
	return (
		<ScrollView style={{ flex: 1, padding: 10 }}>
			<View style={[styles.container, { alignItems: "center" }]}>
				<View style={{ position: "absolute", right: 10, top: 10 }}>
					<Button icon={<Icon name="settings" type="material" size={30} />} type="clear"
					//TODO: open settings
					/>
				</View>
				<Avatar source={pbImage} rounded size={Dimensions.get("window").width / 3} containerStyle={{ marginTop: 50 }} />
				<Text style={[styles.textStyle, { marginVertical: 20 }]}>{username}</Text>
			</View>
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: "row", height: 20, alignItems: "center", marginBottom: 20 }}>
					<Image source={require("../assets/images/user-circle.png")} style={{ aspectRatio: 1, height: 20, marginRight: 20 }} />
					<Text style={[styles.textStyle, { color: "#0785F2" }]}>Persönliche Daten</Text>
				</View>
				<IconText
					Icon={<Image source={require("../assets/images/user.png")} style={{ aspectRatio: 1, height: 40, resizeMode: "center" }} />}
					text={name} />
				<IconText
					Icon={<Image source={require("../assets/images/mail.png")} style={{ aspectRatio: 1, height: 40, resizeMode: "center" }} />}
					text={email} />
				<IconText
					Icon={<Image source={require("../assets/images/phone-2.png")} style={{ aspectRatio: 1, height: 40, resizeMode: "center" }} />}
					text={telnr} />
			</View>
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: "row", height: 20, alignItems: "center", marginBottom: 20 }}>
					<Image source={require("../assets/images/lightning.png")} style={{ aspectRatio: 1, width: 20, resizeMode: "center", marginRight: 20 }} />
					<Text style={[styles.textStyle, { color: "#0785F2" }]}>Öffentliche Aktivitäten</Text>
				</View>
				<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", height: 40 }}>
					<Text style={{ fontSize: 20, }}>Promoter</Text>
					<Switch thumbColor="#0785F2" trackColor={{ true: "#0785F244", false: "#999" }} onValueChange={s => setPromoter(s)} value={promoter} />
				</View>
				<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", height: 40 }}>
					<Text style={{ fontSize: 20, }}>Geistmodus</Text>
					<Switch thumbColor="#0785F2" trackColor={{ true: "#0785F244", false: "#999" }} onValueChange={s => setGhostMode(s)} value={ghostMode} />
				</View>
			</View>
			<View style={[styles.container]}>
				<Button onPress={() => null} //TODO: REset password
					type="clear" title="Passwort ändern" icon={{ name: "lock", type: "evilicon", color: "#0785F2" }} titleStyle={{ color: "#0785F2" }} />
				<Button onPress={() => dispatchLogOut()} //TODO: Logout
					type="clear" title="Abmelden" titleStyle={{ color: "#0785F2" }} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,

	},
	container: {
		borderBottomColor: "#DCDCDC",
		borderBottomWidth: 1,
		flex: 1,
		padding: 20
	}
})


export default enhance(ProfileView)
