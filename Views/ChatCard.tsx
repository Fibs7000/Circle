import React from 'react'

import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Avatar, Badge } from "react-native-elements";
import { Dimensions } from "react-native";

const pbImage = require("../assets/images/elizeu-dias-520676-unsplash-2.png");
//TODO: DELETE

export const ChatCard = ({onPress, newChatCount = 5, Name = "Herman Pope",lastMessageTime = "04:04", lastMessageText = "Hey! How's it going? Velit officia dolor esse consequat deserunt. Officia ad in fugiat sit duis. Dol." }) => (
    <TouchableOpacity style={[styles.flexRC, { margin: 10 }]} onPress={onPress}>
        <View>
            <Avatar source={pbImage} rounded size="large" />
           {newChatCount>0&& <Badge value={newChatCount > 99 ? "99+" : newChatCount} status="error" textStyle={{ fontSize: 15 }}
                badgeStyle={{ backgroundColor: "#AB6F74", borderWidth: 1 }}
                containerStyle={{ position: 'absolute', bottom: 4, right: 4 }} />}
        </View>
        <View style={{marginLeft:20, marginRight: 20}} >
            <Text style={{fontSize: 20}}>{Name}</Text>
            <Text style={{marginRight: 80}} numberOfLines={1} ellipsizeMode="tail" >{lastMessageText}</Text>
        </View>
        <Text style={{position: "absolute", right: 10, top: 10}}>{lastMessageTime}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    flexRC: {
        flexDirection: "row",
        alignItems: "center"
    }
})