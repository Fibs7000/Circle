import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
import IconMatC from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMat from 'react-native-vector-icons/MaterialIcons'
import IconEnt from 'react-native-vector-icons/Entypo'
import Searchbar from './Searchbar';
import ButtonSlider, { DataType } from './ButtonSlider';
import Card from "./Card";
import { ScrollView } from 'react-native-gesture-handler';
export const SearchTypes: DataType[] = [
	{ title: "Events", icon: <IconSLI name="fire" size={20} />, type: "fire", iconType: IconSLI },
	{ title: "Bars", icon: <IconEnt name="drink" size={20}/> , type: "drink", iconType: IconEnt},
	{ title: "Restaurants", icon: <IconMatC name="food" size={20}/>, type: "food" , iconType: IconMatC},
	{ title: "Clubs", icon: <IconMat name="speaker-group" size={20} />, type: "speaker-group" , iconType: IconMat}];
const MainView = () => {
	const [search, updateSearch] = useState(""); //TODO: implement
	
	return (
		<View style={{ flex: 1, alignItems: "stretch" }}>
			<StatusBar backgroundColor="transparent" barStyle="dark-content" />
			<Searchbar value={search} updateSearch={updateSearch}></Searchbar>
			<ButtonSlider data={SearchTypes} onChange={(v, i) => null} height={100} //TODO:IMPLEMENT
			/>
			<ScrollView>
				{new Array(10).fill(1).map((x, i) => (<Card key={i}
					mainImage={require("../assets/images/bild-12-4.png")}
					eventName="Thalia"
					locationName="Thalia Bar"
					locationSpec="Opernring 12 bla"
					peopleCount={10}
					date={new Date(Date.now())}
					rating={4.8}
					icon={require("../assets/images/avatar-2.png")}
				/>))}
			</ScrollView>
		</View>
	)
}

export default MainView
