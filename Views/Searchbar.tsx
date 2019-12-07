import React from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";

export default ({updateSearch, value}) => {
    return (
        <View style={{
            flex: 0,
            borderBottomColor: "#999",
            borderBottomWidth: 0.5
        }}>
            <SearchBar placeholder="location" style={{
                flex: 1
            }} onChangeText={t => updateSearch(t)} value={value} lightTheme round containerStyle={{
                backgroundColor: "transparent"
            }} inputContainerStyle={{
                backgroundColor: "transparent"
            }} platform="ios" searchIcon={<Icon name="location" size={20} />} />
        </View>
    );
}