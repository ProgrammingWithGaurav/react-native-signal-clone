import React from 'react';
import { StyleSheet } from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivide>
            <Avatar
                rounded
                source={{
                    uri: 'https://cencup.com/wp-content/uploads/2015/03/avatar-placeholder.png'
                }}
             />

             <ListItem.Content>
                 <ListItem.Title style={{fontWeight: '800'}}>
                     {chatName}
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
