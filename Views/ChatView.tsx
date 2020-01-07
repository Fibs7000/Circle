import React, { useReducer, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import firebase, { auth, firestore } from 'firebase';
import { AppState } from '../redux/store';
import { NavigationScreenProp, NavigationState, NavigationParams, FlatList } from 'react-navigation';
import { connect } from 'react-redux';
import { ChatCard } from './ChatCard';
export type RootChatType = {
    lastMessageTimestamp: firestore.Timestamp,
    otherUserId: string,
    lastMessage: string,
    unreadMessages: number,
    chatID: string,
    otherUserName: string
}
const initialChatState:{chats: RootChatType[]} = {
    chats: []
}

function ChatReducer(state:typeof initialChatState, action) {
    switch(action.type){
        case "loadChats": return {...state, chats: action.chats}
    }
    return state;
}

async function getChats(uid: string, gotNewChats: (chats: RootChatType[])=>void): Promise<RootChatType[]>{
   await firebase.firestore().collection('userdata').doc(uid).collection('chats').onSnapshot({
       next: (sn) => {
           const chats = sn.docs.map(d => ({chatID: d.id, ...d.data()} as RootChatType));
            gotNewChats(chats);
       }
   });
   return 
}

function toTime(date: Date){
    return ("00"+date.getHours().toString()).slice(-2) + ":" + ("00"+date.getMinutes().toString()).slice(-2)
}

const mapStateToProps = (state: AppState) => ({
	user: state.auth.user
})

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps>;

const enhance = connect(mapStateToProps);

const ChatView = enhance(({user, navigation}: props) => {
    const [state, dispatch] = useReducer(ChatReducer, initialChatState);
    useEffect(() => {
        getChats(user.uid, (chats: RootChatType[])=> dispatch({type: "loadChats", chats}));
    }, [])
    return (
        <View>
            <Text style={styles.header}>Nachrichten</Text>
            <FlatList data={state.chats} renderItem={({item, index}: {item: RootChatType, index: number})=> 
            <ChatCard 
            onPress={()=>{
                navigation.navigate("chat", {chatId: item.chatID, meta: item})
            }}
            Name={item.otherUserName} 
            key={item.chatID} 
            lastMessageText={item.lastMessage} 
            lastMessageTime={toTime(item.lastMessageTimestamp.toDate())}
            newChatCount={item.unreadMessages} />} />
        </View>
    )
})

const styles = StyleSheet.create({
    header:{
        fontSize: 50,
        textAlign: "center",
        padding: 50,
        borderBottomColor: "#aaa",
        borderBottomWidth: 0.5
    }
})

export default ChatView
