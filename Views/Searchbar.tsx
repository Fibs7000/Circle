import React, { ReactElement, Component } from "react";
import { View, ReturnKeyTypeOptions, KeyboardTypeOptions, ViewStyle, TextStyle, ListView } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default ({ updateSearch, value }) => {
    return (
        <View style={{
            flex: 0,
            borderBottomColor: "#999",
            borderBottomWidth: 0.0,
            minHeight: 70,
            position: "absolute", top: 0, width: "100%"
        }}>
            <GooglePlacesAutocomplete
                placeholder='Enter Location'
                minLength={2}
                autoFocus={false}
                returnKeyType='search'
                fetchDetails={false}
                debounce={200}

                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyBlcApC_sep8rr3_Hivir8mSb_bBe8PngE',
                    language: 'de', // language of the results
                    types: '(cities)' // default: 'geocode'
                }}
                styles={{
                    // container: {
                    //     position: "absolute",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     zIndex: 100
                    // },
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