import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Input, Icon, Card} from 'react-native-elements'
import Searchbar from './Searchbar';
import ButtonSlider, { DataType } from './ButtonSlider';


const MainView = () => {
	const [search, updateSearch] = useState(""); //TODO: implement
	const SearchTypes: DataType[] = [
		{title: "Events", icon: <Icon name="fire" type="simple-line-icon" size={20}/> },
		{title: "Bars", icon: <Icon name="drink" type="entypo"/> },
		{title: "Restaurants", icon: <Icon name="food" type="material-community" /> },
		{title: "Clubs", icon: <Icon name="speaker-group" type="material" /> }
	]
	return (
		<View style={{ flex: 1, alignItems: "stretch" }}>
			<StatusBar backgroundColor="transparent" barStyle="dark-content" />
			<Searchbar value={search} updateSearch={updateSearch}></Searchbar>
			<ButtonSlider data={SearchTypes} onChange={(v, i)=>null} height={100} //TODO:IMPLEMENT
			/>
			<Card/>
		</View>
	)
}

export default MainView
