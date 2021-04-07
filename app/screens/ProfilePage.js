
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useAuth from '../auth/useAuth';
import AppButton from '../components/AppButton';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';


const  menuItems = [
    { 
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.black,
        }
    },
    { 
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.black,
        },
        targetScreen: "Messages"
    }
]

function ProfilePage({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/IMG_7650.png')}
                />
                <ListItem title="Location"/>
            </View>
            
            
            <ListItem title="Skill"/>
            <ListItem title="Experience"/>
            <ListItem title="Education"/>
            <ListItem title="Music Genre"/>
            <ListItem title="Instrument Played"/>
            <ListItem title="Software Used"/>
            {/* <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => 
                        <ListItem 
                            title={ item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View> */}
            <View style={styles.logout}>
                <AppButton
                    title="Log Out"
                    onPress={() => logOut()}
                />

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical :25,
    },
    screen:{
        backgroundColor:colors.bgColor,
    },
    logout:{
        marginTop: 20,
        padding: 10,
        
    }
})

export default ProfilePage;