import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import { Icon, Button, Avatar } from 'react-native-elements'

export function leadingZeros(s: any, zerocount: number = 2, char: string = '0'){
    return (new Array(zerocount).join(char) + s.toString()).slice(-zerocount);
}

export function getWrittenDate(date: Date, type: "long" | "standard" = "standard") {
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
    if(type == "long"){
        res+= leadingZeros(date.getDate()) + "." + leadingZeros(date.getMonth()+1) + "." + date.getFullYear() + "\nAb ";
    }
    res +=leadingZeros(date.getHours()) + ":";
    res += leadingZeros(date.getMinutes());
    return res;
}

type props = {
    eventName: string,
    locationName: string,
    peopleCount: number,
    locationSpec: string,
    rating: number,
    mainImage: object,
    icon: object,
    date: Date,
    distance?: number,
    small?: boolean
}

function getWrittenDistance(distance: number){
    if(distance > 10000)
        return (distance/1000).toFixed(0) + " km"
    if(distance > 1000)
        return (distance/1000).toFixed(1) + " km"
        return (distance).toFixed(0) + " m"
}

const Card = ({ eventName, locationName, peopleCount, locationSpec, rating, mainImage, icon, date, distance = null, small = false }: props) => {
    if (small)
        return (
            <View style={{ flexDirection: "row", height: 130, padding: 10 }}>
                <Image source={mainImage} style={{ margin: 5, borderRadius: 5, aspectRatio: 1, height: "100%", width: "auto" }} />
                <View style={{ flex: 1, paddingHorizontal: 5 }}>
                    <Text style={{ fontSize: 20 }}>{eventName}</Text>
                    <View style={{ flexDirection: "row", flex:1, marginRight: 20 }}>
                        <Text style={{ color: "#999", marginRight: 10 }}>{locationSpec}</Text>
                        <Icon name="location" type="evilicon" color="#0785F2" />
                    </View>
                    <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "baseline"}}>
                        <Text style={{ color: "#aaa", fontWeight: "bold" }}>{getWrittenDate(date)}</Text>
                        <Text style={{ color: "#aaa", fontWeight: "bold" }}>{getWrittenDistance(distance)}</Text>
                    </View>
                </View>
            </View>
        )

    else return (

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
