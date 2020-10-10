import React, { useState, useEffect, useCallback } from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import { MessageView, MessageText, MessageSendView, MessageSendInput, MessagenSendButton } from './styles'

import firebase from 'firebase';
import 'firebase/firestore';

const Chat = () =>{
    const [messageUser, setMessageUser] = useState();
    const [allMessage, setAllMessage] = useState([]);
    console.log(messageUser)

    const loadMessage = useCallback(
        async () => {
          try {
            const response = await firebase.firestore().collection('help-chat').get();
            const temp = [];
            response.forEach(doc => {
              // console.log(doc.id, '=>', doc.data());
              temp.push({id: doc.id, ...doc.data()});
            })
            setAllMessage(temp);

          } catch (error) {
            console.log('error loadMessage', error);
          }
      },[]);
   
    useEffect(() =>{
        loadMessage()
    },[])

    const onTarefasChanged = useCallback(snap => {
        const data = snap.docs.map(doc => ({id: doc.id, ...doc.data()}));

        setAllMessage(data);
        loadMessage();
      }, []);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('help-chat').onSnapshot(onTarefasChanged);
        return () => unsubscribe();
      }, [])

    console.log(allMessage)
    
    const handleAddTask =  async () => {
          try {
            await firebase.firestore().collection('help-chat').add({
             message: messageUser
            });
            setMessageUser("");
            loadMessage();
          } catch (error) {
            console.log("error handleAddTask:", error);
          }
    }
/*  */

    return (
        <>  
            <MessageView>
                {allMessage.map(mess =>{
                    return(
                    <MessageText key={mess.id}> {mess.message}</MessageText>
                    )
                })}
            </MessageView>
            <MessageSendView style={{justifyContent:"center", flex: 1, alignItems:"center"}}>
                <MessageSendInput style={{color: "#fff"}} 
                            placeholder="Digite aqui"
                            placeholderTextColor="white"
                            value={messageUser} onChangeText={text => setMessageUser(text)}> 
                </MessageSendInput >
                <MessagenSendButton onPress={() => handleAddTask()}>
                    <Text style={{color: "#fff", fontWeight:"bold"}}> Enviar </Text>
                </MessagenSendButton>
            </MessageSendView>
        </>
    )
};

export default Chat;