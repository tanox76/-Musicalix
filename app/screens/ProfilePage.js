
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import firebase from '../../firebaseDB';
import "../../app/global"


import useAuth from '../auth/useAuth';
import AppButton from '../components/AppButton';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { ScrollView } from 'react-native-gesture-handler';








const menuItems = [
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
    //const { user, logOut } = useAuth();


    //loadUser();
    //RegisterScreen();
    return (

        <Screen style={styles.screen}>
            <ScrollView>
                <View style={styles.container}>
                    <ListItem
                        title={global.name}
                        subTitle={global.email}
                        image={require('../assets/IMG_7650.png')}
                    />

                </View>

                <ListItem title="Location" subTitle={global.address} />
                <ListItem title="Skill" subTitle={global.skill} />
                <ListItem title="Experience" subTitle={global.experience} />
                <ListItem title="Education" subTitle={global.education} />
                <ListItem title="Music Genre" subTitle={global.genre} />
                <ListItem title="Instrument Played" subTitle={global.instrument} />
                <ListItem title="Software Used" subTitle={global.software} />
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
                        onPress={() => navigation.navigate("Login")}
                    />

                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
    },
    screen: {
        backgroundColor: colors.bgColor,
    },
    logout: {
        marginTop: 20,
        padding: 10,

    }
})

export default ProfilePage;