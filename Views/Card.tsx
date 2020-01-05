import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Icon, Button, Avatar } from 'react-native-elements'

function getWrittenDate(date: Date) {
    date = new Date(date);
    var res = "";
    switch (date.getDay()) {
        case 1:
            res += "Montag "
            break;
        case 2:
            res += "Dienstag "
            break;
        case 3:
            res += "Mittwoch "
            break;
        case 4:
            res += "Donnerstag "
            break;
        case 5:
            res += "Freitag "
            break;
        case 6:
            res += "Samstag "
            break;
        case 0:
            res += "Sonntag "
            break;

        default:
            break;
    }
    res += ("00" + date.getHours().toString()).slice(-2) + ":";
    res += ("00" + date.getMinutes().toString()).slice(-2);
    return res;
}

const Card = ({ eventName, locationName, peopleCount, locationSpec, rating, mainImage, icon, date }: { eventName: string, locationName: string, peopleCount: number, locationSpec: string, rating: number, mainImage: object, icon: object, date: Date }) => {
    return (
        <View>
            <View style={{ height: 80, flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <Avatar source={icon} containerStyle={styles.shadow} size={50} rounded />
                <Text style={{ marginLeft: 20, fontSize: 20, flex: 1 }}>{eventName}</Text>
                <Text style={{ marginRight: 20, color: "#999" }}>{getWrittenDate(date)}</Text>
            </View>
            <ImageBackground source={mainImage} style={{ aspectRatio: 16 / 10 }}>
                <View style={{ flexDirection: "row", backgroundColor: "white", position: "absolute", right: 20, top: 20, borderRadius: 50, alignItems: "center", paddingHorizontal: 10 }}>
                    <Text>{rating}</Text>
                    <Icon name="star" color="#FFD526" />
                </View>
            </ImageBackground>
            <View>
                <View style={{ flexDirection: "row", padding: 20 }}>
                    <Text style={{ flex: 1, fontSize: 20 }}>{locationName}</Text>
                    <Icon name="person" type="material" />
                    <Text>{peopleCount}</Text>
                </View>
                <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                    <Text style={{ color: "#999", marginRight: 10 }}>{locationSpec}</Text>
                    <Icon name="location" type="evilicon" color="#0785F2" />
                </View>
                <Button type="solid" buttonStyle={{ backgroundColor: "#0785F2", width: "70%", borderRadius: 100, alignSelf: "center", marginVertical: 20 }} title="Reservieren" />
            </View>
        </View>
    )
}

export default Card


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
    }
})
