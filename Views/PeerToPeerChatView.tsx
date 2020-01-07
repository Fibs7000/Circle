import React, { useReducer, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { AppState } from '../redux/store';
import { RootChatType } from './ChatView';
import { firestore } from 'firebase';
import firebase from 'firebase';
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

type Message = IMessage & {
    read: boolean,
    id: string
}

// export interface IMessage {
//     _id: string | number;
//     text: string;
//     createdAt: Date | number;
//     user: User;
//     image?: string;
//     video?: string;
//     audio?: string;
//     system?: boolean;
//     sent?: boolean;
//     received?: boolean;
//     pending?: boolean;
//     quickReplies?: QuickReplies;
// }

const pbImage = require("../assets/images/elizeu-dias-520676-unsplash-2.png");

const initialChatState: { chats: IMessage[] } = {
    chats: []
}

function ChatReducer(state: typeof initialChatState, action) {
    switch (action.type) {
        case "loadChats": return { ...state, chats: action.chats }
    }
    return state;
}

async function getChats(uid: string, chatID: string, otherUid: string, otherUserName: string, gotNewChats: (chats: IMessage[]) => void) {
    const messageDB = firebase.firestore().collection('userdata').doc(uid).collection('chats').doc(chatID).collection('messages');
    messageDB.orderBy('createdAt', "desc").onSnapshot({
        next: (sn) => {
            const chats = sn.docs.map(d => (
                 {...d.data(),id: d.id, createdAt: (d.get('createdAt') as firestore.Timestamp).toDate()} as Message));
            gotNewChats(chats);
            chats.filter(c=> c.read == false).forEach(m=> messageDB.doc(m.id).update({read: true}));
        }
    });
}


const mapStateToProps = (state: AppState) => ({
    user: state.auth.user
})

type props = { navigation: NavigationScreenProp<NavigationState, NavigationParams> } & ReturnType<typeof mapStateToProps>;

const enhance = connect(mapStateToProps);

export const PeerToPeerChatView = enhance(({ navigation, user }: props) => {
    const chatID: string = navigation.getParam('chatId', null) || navigation.goBack();
    const meta: RootChatType = navigation.getParam('meta', null) || navigation.goBack();
    const [state, dispatch] = useReducer(ChatReducer, initialChatState);
    useEffect(() => {
        getChats(user.uid, chatID, meta.otherUserId, meta.otherUserName, (chats)=> dispatch({type: "loadChats", chats: chats}));
    }, []);
    const onSend = (messages: Message[])=>{
        const db = firebase.firestore().collection('userdata');
        for (var message of messages) {
            message = {...message, user: {...message.user, name: user.firstName + " " + user.name}}
            db.doc(user.uid)
            .collection('chats').doc(chatID).collection('messages').add(message);
            db.doc(meta.otherUserId)
            .collection('chats').doc(chatID).collection('messages').add({...message, read: false});
        }
    }
    const [messages, setMessages] = useState([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]);
      const onSend1 = (newMessages = [])=> {
        setMessages(GiftedChat.append(messages, newMessages))
      }

    return (
        <View style={{flex: 1}}>
            <Text style={styles.header}>Chat</Text>
            <GiftedChat messages={state.chats} 
            user={{_id: user.uid}}
            onSend={onSend}/>
        </View>
            )
        })
        
const styles = StyleSheet.create({
                header:{
                fontSize: 50,
            textAlign: "center",
            padding: 20,
            borderBottomColor: "#aaa",
            borderBottomWidth: 0.5
        }
    })
    
    
    export default PeerToPeerChatView
