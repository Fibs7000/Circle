import React from 'react'
import { View, Text } from 'react-native'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { EventDAO } from '../../entities';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../Card';

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & {
    events: (EventDAO&{distance: number})[],
    onPressItem: (event: EventDAO)=> void
};


export const NearPlacesList = ({ events, navigation, onPressItem }: props) => {
    return (
        <FlatList
            style={{ backgroundColor: "#fff" }}
            showsVerticalScrollIndicator={false}
            data={events}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={{ borderBottomColor: "#999", borderBottomWidth: 0.5, marginHorizontal: 15, marginTop: 5 }} />}
            renderItem={({ item, index }) =>
                <TouchableOpacity onPress={()=> onPressItem(item)}>
                    <Card
                    distance={item.distance}
                    small
                    mainImage={require("../../assets/images/bild-12-4.png")}
                    eventName={item.eventName}
                    locationName={item.locationName}
                    locationSpec={item.addressText}
                    peopleCount={item.peopleThereCount}
                    date={item.date}
                    rating={item.rating}
                    icon={require("../../assets/images/avatar-2.png")}
                />
                </TouchableOpacity>} />
    )
}
