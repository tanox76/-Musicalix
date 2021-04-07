import React from 'react';  
import {View, StyleSheet, Platform, TouchableWithoutFeedback} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors'
import AppText from './AppText'


function Card({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} tint="light" preview={{ uri: thumbnailUrl }}uri={imageUrl}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={3}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 5,
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 100,
    },
    detailsContainer: {
        padding: Platform.OS === "android" ? 10 : 30,
        paddingTop: 50,
        alignItems:'flex-start'
        
    },
    title: {
        marginBottom: 10,
        // fontWeight: 'bold',
        color: colors.battleshipGrey,
        overflow:'visible'
    },
    subTitle:{
        marginBottom: 10,
        color: colors.sandyBrown,
        fontWeight: 'bold'
    }
})
export default Card;