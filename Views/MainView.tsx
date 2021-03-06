import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
import IconMatC from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMat from 'react-native-vector-icons/MaterialIcons'
import IconEnt from 'react-native-vector-icons/Entypo'
import { SearchBar } from './Searchbar';
import ButtonSlider, { DataType } from './ButtonSlider';
import Card from "./Card";
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Restaurant from '../assets/images/restaurant.png';
import Bars from '../assets/images/bars.png';
import Events from '../assets/images/event.png';
import Clubs from '../assets/images/clubs.png';
import firebase from 'firebase'
import { EventDAO, createEventDAO } from '../entities';

//#region stuff

function getDocumentNearBy(latitude: number, longitude: number, distance: number, query: firebase.firestore.Query | firebase.firestore.CollectionReference) {

	// ~1 mile of lat and lon in degrees
	let lat = 0.0144927536231884 * 1.60934
	let lon = 0.0181818181818182 * 1.60934

	let lowerLat = latitude - (lat * distance)
	let lowerLon = longitude - (lon * distance)

	let greaterLat = latitude + (lat * distance)
	let greaterLon = longitude + (lon * distance)

	let lesserGeopoint = new firebase.firestore.GeoPoint(lowerLat, lowerLon)
	let greaterGeopoint = new firebase.firestore.GeoPoint(greaterLat, greaterLon)
	return query.where("geo", ">=", lesserGeopoint).where("geo", "<=", greaterGeopoint);
}

const { imageStyle } = StyleSheet.create({
	imageStyle: {
		resizeMode: "contain",
		height: 25,
		width: 20
	}
})
function renderCard(onItemClick: (item: EventDAO, index: number) => void) {
	return ({ item, index }: { item: EventDAO, index: number }) => {
		return (
			<TouchableOpacity onPress={() => onItemClick(item, index)}>
				<Card key={item.id}
					mainImage={require("../assets/images/bild-12-4.png")}
					eventName={item.eventName}
					locationName={item.locationName}
					locationSpec={item.addressText}
					peopleCount={item.peopleThereCount}
					date={item.date}
					rating={item.rating}
					icon={require("../assets/images/avatar-2.png")}
				/>
			</TouchableOpacity>
		)
	}
}
export const SearchTypes: DataType[] = [
	{ title: "Events", icon: <Image source={Events} style={imageStyle} />, type: "fire", iconType: IconSLI },
	{ title: "Bars", icon: <Image source={Bars} style={imageStyle} />, type: "drink", iconType: IconEnt },
	{ title: "Restaurants", icon: <Image source={Restaurant} style={imageStyle} />, type: "food", iconType: IconMatC },
	{ title: "Clubs", icon: <Image source={Clubs} style={imageStyle} />, type: "speaker-group", iconType: IconMat }];

//#endregion

import { AppState } from "../redux/store";
import { setPlaceAction } from "../redux/placeReducer";
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { connect } from "react-redux";
import { Seperator } from './Seperator'

const mapStateToProps = (state: AppState) => ({
	place: state.place
})

const mapDispatchToProps = {
	setPlace: setPlaceAction
}

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const enhance = connect(mapStateToProps, mapDispatchToProps);


const MainView = ({ navigation, place, setPlace }: props) => {
	const db = firebase.firestore().collection('events');
	const [search, updateSearch] = useState(""); //TODO: implement
	const [cardData, setCardData] = useState<EventDAO[]>([]);
	const [filter, setFilter] = useState(SearchTypes.map(v => ({ title: v.title, selected: false })));
	const [noMoreData, setNoMoreData] = useState(false);
	const getFirebaseData = async (fv = null, reset = false) => {
		if (noMoreData) {
			if (reset) setNoMoreData(false);
			else return;
		}
		var query = getDocumentNearBy(47.0631052, 15.4192276, 1, db).orderBy('geo');

		if ((fv || filter).some(v => v.selected)) {
			const f = (fv || filter).filter(v => v.selected).map(v => v.title);
			query = query.where('type', 'in', f);
		}

		if (!reset && cardData.length > 0) {
			// ;
			query = query.startAfter(cardData[cardData.length - 1].geo);
			const sn = await query.limit(10).get();
			if (sn.size < 10) setNoMoreData(true);
			//@ts-ignore
			setCardData([...cardData, ...sn.docs.map(d => ({ ...d.data(), id: d.id }))]);
		}
		else {
			const sn = await query.limit(10).get();
			if (sn.size < 10) setNoMoreData(true);
			//@ts-ignore
			setCardData(sn.docs.map(d => ({ ...d.data(), id: d.id })));
		}
	}

	const onEndReached = ({ distanceFromEnd }) => {
		getFirebaseData();
	}

	useEffect(() => {
		getFirebaseData()
	}, []);

	return (<>
		<View style={{ flex: 1, alignItems: "stretch" }}>
			<StatusBar backgroundColor="transparent" barStyle="dark-content" />
			<ButtonSlider data={SearchTypes} onChange={(v, i) => {
				var filterval = [...filter];
				filterval[i] = { ...filter[i], selected: v };
				setFilter(filterval);
				getFirebaseData(filterval, true);
			}} height={100}
			/>
			<FlatList
				data={cardData}
				renderItem={renderCard((item, index) => navigation.navigate("details", { item }))}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <Seperator></Seperator>}
				onEndReached={onEndReached}
				keyExtractor={(item, index) => item.id}
			// onEndReachedThreshold={5} 
			/>
			<SearchBar setPlace={setPlace} place={place} />
		</View>
	</>
	)
}

export default enhance(MainView)
