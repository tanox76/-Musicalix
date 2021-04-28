import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Button, TextInput, Text, TouchableOpacity, Animated, Platform, ScrollView, Image } from 'react-native';
import colors from '../config/colors';
import defaultStyles from "../config/styles";
//import styles from '../config/styles';

import "../../app/global"
import firebase from '../../firebaseDB';






import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import { SYSTEM_BRIGHTNESS } from 'expo-permissions';

const MessagesScreen = ({ navigation }) => {
    const [userName, setUserName] = useState("");



    var ViewArray = ["Ana", "Anton", "Andrei"];








    return (
        <Screen style={styles.screen}>
            <ScrollView>
                <View >
                    <View >
                        {ViewArray.map((item, key) => (

                            < View >
                                {/* <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.TouchableOpacityStyle}
                                        onPress={this.handleNavigate({ item })
                                        }>

                                        <Image
                                            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
                                            style={styles.FloatingButtonStyle}
                                        />
                                        <Text key={key} onPress={this.ArrayBind.bind(this, item)}> {item}
                                        </Text>

                                    </TouchableOpacity> */}
                                <View style={styles.button}>
                                    <Button
                                        title={item}
                                        onPress={() => {
                                            setUserName(item);
                                            navigation.navigate('ConversationScreen', {
                                                paramKey: item,
                                                title: item
                                            });
                                            //alert(item)
                                        }}
                                        color='#fff'
                                    >
                                    </Button>
                                </View>

                            </View>
                        ))}</View>
                </View>
            </ScrollView >
        </Screen >

    )
};
export default MessagesScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    container: {

        padding: 20,
        //backgroundColor: colors.bgColor,
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15
    },
    textInput: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        marginVertical: 5,
    },
    logo: {
        width: 240,
        height: 200,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 40,
        marginLeft: 30,
    },
    location: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        marginVertical: 5,
    },
    appTextLocation: {
        color: defaultStyles.colors.inputText,
    },
    button: {
        backgroundColor: colors.buttonColor,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        //padding: 15,
        width: '100%',
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    register: {
        marginTop: 20,
    },
    screen: {
        backgroundColor: colors.bgColor,
    },
    TouchableOpacityStyle: {

        //position: 'absolute',
        //width: 50,
        height: 50,
        alignItems: 'flex-start',
        backgroundColor: colors.buttonColor,
        opacity: 0.7,
        margin: 10,
        //justifyContent: 'left',
        //right: 30,
        //bottom: 30,
    },
});


// const initialMessages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/IMG_7650.png')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/IMG_7650.png')
//     },
// ]
// function MessagesScreen(props) {
//     const [messages, setMessages] = useState(initialMessages);  // setState
//     const [refreshing, setRefreshing] = useState(false);

//     const handleDelete = message => {
//         //Delete the message from messages
//         setMessages(messages.filter(m => m.id !== message.id))

//         //Call the server
//     };

//     return (
//         <Screen>
//             <FlatList
//             data={messages}
//             keyExtractor={message => message.id.toString()}
//             renderItem={({item}) => 
//                  <ListItem
//                     title={item.title}
//                     description={item.description}
//                     image={item.image}
//                     onPress={() => console.log("Message Selected", item)}
//                     renderRightActions={() => 
//                         <ListItemDeleteAction onPress={() => handleDelete(item)} />}
//                     />
//                 }
//                 ItemSeparatorComponent={ListItemSeparator}
//                 refreshing={refreshing}
//                 onRefresh={() => {
//                     setMessages([
//                         {
//                             id: 2,
//                             title: 'T2',
//                             description: 'D2',
//                             image: require('../assets/IMG_7650.png')
//                         }
//                     ])
//                 }}
//             />
//         </Screen>
//     );
// }



// })

// export default MessagesScreen;