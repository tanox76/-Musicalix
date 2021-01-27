import React from 'react';  
import {View, StyleSheet, Image, Platform, Button} from 'react-native';

import colors from '../config/colors'
import AppText from './AppText'


function Card({name, profession, location, image}) {
    return (
       <View style={styles.card}>
           <Image style={styles.image} source={image}/>
           <View style={styles.detailsContainer}>
           <AppText style={styles.name}>{name}</AppText>
           <AppText style={styles.profession}>{profession}</AppText>
           <AppText style={styles.location}>{location}</AppText>
           </View>
       </View>
    
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row-reverse',
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 5,
        overflow: 'hidden'
    },
    image: {
        width: 200,
        height: 200,
    },
    detailsContainer: {
        padding: Platform.OS === "android" ? 10 : 30,
        paddingTop: 50
    },
    name: {
        marginBottom: 10,
        fontWeight: 'bold',
        color: colors.brightGold
    },
    profession:{
        marginBottom: 10,
        color: colors.sandyBrown,
        fontWeight: 'bold'
    },
    location: {
        fontWeight: 'bold',
        color: colors.coppeR,
    }
})
export default Card;