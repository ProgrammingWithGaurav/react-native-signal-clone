import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/1946/1946429.png'
                }}
             />

             <ListItem.Content>
                 <ListItem.Title style={{fontWeight: '800'}}>
                     Youtube Chat
                 </ListItem.Title>
                 <ListItem.Subtitle numberOfLines={1} ellipsizerMode='tail'>
                     This is a test subtitle
                 </ListItem.Subtitle>
             </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
