import React from 'react';
import { Image, View, StyleSheet, Text, Platform } from 'react-native';

import colors from '../config/colors'
function ProfilePage(props) {
    return (
        <View style={styles.profile}> 
            <Text style={styles.title}>Anton Oceanu</Text>
            <Image style={styles.image} source={require('../assets/picture.jpg')} />
            
            <View style={styles.detailsContainer}>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    profile: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 40,
        fontFamily: Platform.OS === "android" ? 'normal' : 'KohinoorTelugu-Regular'
    }
    
})

export default ProfilePage;