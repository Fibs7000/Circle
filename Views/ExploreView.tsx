import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Searchbar from './Searchbar'
import ButtonSlider from './ButtonSlider'
import { SearchTypes } from './MainView'
import MapboxGL from '@react-native-mapbox-gl/maps'

MapboxGL.setAccessToken("pk.eyJ1IjoiZmliczcwMDAiLCJhIjoiY2p4MXplcGExMDE0bDQ0cXFuOXVnM2dlZSJ9.D0HbtL6Bbvd77XRzD-QmlQ");

const ExploreView = () => {
    const [search, updateSearch] = useState(""); //TODO: implement
    return (
        <View>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Searchbar value={search} updateSearch={updateSearch}></Searchbar>
            <ButtonSlider data={SearchTypes} onChange={(v, i) => null} height={100} //TODO:IMPLEMENT
            />
            <View style={{height: "100%", width: "100%"}}>
                <MapboxGL.MapView style={{ flex: 1 }} styleURL="" >
                    <MapboxGL.Camera zoomLevel={9} followUserLocation/>
                </MapboxGL.MapView>
            </View>
        </View>
    )
}

export default ExploreView
