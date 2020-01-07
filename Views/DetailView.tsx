import React, { useState } from 'react'
import { View, Text, Image, Animated, StyleSheet } from 'react-native'

import { AppState } from "../redux/store";
import { setPlaceAction } from "../redux/placeReducer";
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { connect } from "react-redux";
import { EventDAO } from '../entities';
import { Seperator } from './Seperator';
import { Avatar, Icon } from 'react-native-elements';
import { getWrittenDate } from './Card';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MapboxGL from '@react-native-mapbox-gl/maps';

const mapStateToProps = (state: AppState) => ({
    place: state.place
})

const mapDispatchToProps = {
    setPlace: setPlaceAction
}

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const enhance = connect(mapStateToProps, mapDispatchToProps);

const DetailView = ({ navigation }: props) => {
    const item: EventDAO = navigation.getParam('item');
    item.pictures = ["https://picsum.photos/200/100", "https://picsum.photos/200/100", "https://picsum.photos/200/100", "https://picsum.photos/200/100", "https://picsum.photos/200/100", "https://picsum.photos/200/100", "https://picsum.photos/200/100", "https://picsum.photos/200/100"]
    var [scroll] = useState(new Animated.Value(0));
    return (
        <Animated.ScrollView
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], { useNativeDriver: true })}
        >
            <Animated.View style={{ transform: [{ translateY: Animated.multiply(scroll, 0.8) }] }}>
                <Image source={require('../assets/images/bild-12-3.png')} style={{ aspectRatio: 18 / 9, resizeMode: 'cover', width: "100%", height: "auto" }} />
            </Animated.View>
            <View style={{ backgroundColor: 'white' }}>

                <View style={{ margin: 15, flexDirection: "row", justifyContent: "space-between", paddingRight: 30 }}>
                    <View>
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.eventName}</Text>
                        <Text style={{ fontSize: 20, color: "#999" }}>{item.locationName}</Text>
                    </View>
                    <Avatar source={require("../assets/images/avatar-2.png")} containerStyle={styles.shadow} size={100} rounded />
                </View>
                <Seperator />
                <View style={styles.horizontalIconText} >
                    <Image style={styles.image} source={require("../assets/images/calendar.png")} width={30} height={30} />
                    <Text>{getWrittenDate(item.date, "long")}</Text>
                </View>
                <View style={styles.horizontalIconText} >
                    <Image style={styles.image} source={require("../assets/images/gruppe-9698.png")} width={30} height={30} />
                    <Text>{item.addressText}</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Über uns</Text>
                    <Text>{item.description}</Text>
                    {item.pictures && item.pictures.length > 0 && <>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>Pictures</Text>
                        <FlatList
                            style={{ marginHorizontal: -20 }}
                            data={item.pictures}
                            renderItem={({ item, index }) => <Image key={item} source={{ uri: item }} style={{ resizeMode: "cover", aspectRatio: 9 / 12, width: 150, borderRadius: 10, margin: 10, marginLeft: index == 0 ? 20:10 }} />}
                            horizontal={true} showsHorizontalScrollIndicator={false} />
                    </>}
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Location</Text>
                    <MapboxGL.MapView style={{ flex: 1, aspectRatio: 5 / 3, marginHorizontal: -20 }}>
                        <MapboxGL.Images images={{ marker: require("../assets/images/gruppe-9698.png") }} />
                        <MapboxGL.Camera key={1} zoomLevel={16} centerCoordinate={[item.geo.longitude, item.geo.latitude]} animationDuration={0} />
                        <MapboxGL.ShapeSource id="sc4" shape={{
                            "type": "FeatureCollection",
                            "features": [
                                {
                                    id: "123",
                                    "type": "Feature",
                                    properties: {
                                        icon: 'pin',
                                    },
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [item.geo.longitude, item.geo.latitude]
                                    }
                                }
                            ]
                        }} cluster={false}>
                            <MapboxGL.SymbolLayer id="exampleIconName" style={{ iconSize: 2, iconImage: 'marker' }} />
                        </MapboxGL.ShapeSource>
                    </MapboxGL.MapView>
                    <Text style={{ textAlign: "center", fontSize: 15, margin: 20 }}>{item.addressText}</Text>
                    <TouchableOpacity
                    //TODO: onPress
                    style={{ backgroundColor: "#4686E4", marginVertical: 50, alignSelf: "center", height: 60, width: "70%", borderRadius: 30, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>Reservieren</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.ScrollView>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    horizontalIconText: {
        flexDirection: "row",
        padding: 10,
    },
    image: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
        resizeMode: "contain"
    }
})

export default DetailView
