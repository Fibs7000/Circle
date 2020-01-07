import React, { ReactElement, Component, FunctionComponent, useState } from "react";
import { View, ReturnKeyTypeOptions, KeyboardTypeOptions, ViewStyle, TextStyle, ListView } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import GooglePlacesAutocomplete from "./common/GooglePlacesAutoCompleteView";
import { placeState } from "../redux/placeReducer";


type props = {
    place: placeState,
    setPlace: (place: placeState) => void
}

export const SearchBar: FunctionComponent<props> = ({ place, setPlace }: props) => {
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(false);
    return (
        <View style={{
            flex: 0,
            borderBottomColor: "#999",
            borderBottomWidth: 0.0,
            minHeight: 70,
            position: "absolute", top: 0, width: "100%"
        }}>
            <GooglePlacesAutocomplete
                text={(!typing && place?.name) || text}
                textInputProps={{
                    onChangeText: (text) => {
                        console.log(text.length>0 && text != place.name);
                        console.log(place.name);
                        console.log(text);
                        setTyping(text != place.name);
                        setText(text);
                    }
                }}
                autoFillOnNotFound={true}
                listViewDisplayed={typing}
                placeholder='Enter Location'
                minLength={2}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    setTyping(false);
                    console.log(data, details);
                    setPlace({
                        location: {
                            lat: details.geometry.location.lat,
                            lon: details.geometry.location.lng
                        },
                        name: data?.structured_formatting?.main_text || data.description
                    })
                }}
                autoFocus={false}
                returnKeyType='search'
                fetchDetails={true}
                nearbyPlacesAPI="GooglePlacesSearch"
                GooglePlacesSearchQuery={{
                    rankby: 'distance',
                    types: ''
                }}
                debounce={200}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyBiKgVaBRi8e_5tca-RwD-D0li8_Yt2Pc8',
                    language: 'de', // language of the results
                }}
                styles={{
                    poweredContainer: {
                        height: 0, width: 0
                    },
                    powered: {
                        height: 0, width: 0
                    },
                    textInputContainer: {
                        backgroundColor: "#0000",
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        height: 50
                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 50,
                        color: '#000',
                        backgroundColor: "#0000",
                        fontSize: 30
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    },
                    listView: {
                        backgroundColor: "white",
                        marginTop: 10,
                    }
                }}
                currentLocation={false}
                renderLeftButton={() => <View style={{ justifyContent: "center", alignItems: "center", height: 50, paddingTop: 10, paddingHorizontal: 10 }}><Icon name="location" size={30} color="#0785F2" /></View>}
            />
        </View>
    );
}