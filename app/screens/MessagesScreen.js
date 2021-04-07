import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/IMG_7650.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/IMG_7650.png')
    },
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);  // setState
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id))

        //Call the server
    };

    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
                 <ListItem
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    onPress={() => console.log("Message Selected", item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/IMG_7650.png')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;