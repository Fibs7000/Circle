import firebase from "firebase";
export type EventDAO = {
    id: string,
    type: "Events" | "Bars" | "Restaurants" | "Clubs",
    geo: firebase.firestore.GeoPoint,
    addressText: string,
    date: Date,
    locationName: string,
    eventName: string,
    peopleThereCount: number,
    rating: number,
    description: string,
    pictures: string[]
}

export function createEventDAO(id: string,
    type: "Events" | "Bars" | "Restaurants" | "Clubs",
    geo: firebase.firestore.GeoPoint,
    addressText: string,
    date: Date,
    locationName: string,
    eventName: string,
    peopleThereCount: number,
    rating: number): EventDAO{
        return {type, geo, addressText, date, locationName, eventName, peopleThereCount, rating, id};
    }