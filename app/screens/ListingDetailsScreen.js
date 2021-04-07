import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView, StatusBar, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import Constants from "expo-constants";


import AppText from '../components/AppText';
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from '../components/ListItem';
import colors from '../config/colors';


function ListingDetailsScreen({ route }) {
    const listing = route.params;
    const DismissKeyboard = ({children}) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
            {children}
        </TouchableWithoutFeedback>
    );

    return (
        <DismissKeyboard>

            <View style={styles.page}>          
                <KeyboardAvoidingView 
                behavior="position"
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
                >
                    <Image 
                        style={styles.image} 
                        tint="light" 
                        preview={{uri: listing.images[0].thumbnailUrl.url}} 
                        uri={listing.images[0].url} 
                    />
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{listing.title}</AppText>
                        <AppText style={styles.description}>{listing.description}</AppText>
                        <ContactSellerForm listing={listing} />
                    </View>
                </KeyboardAvoidingView> 
            </View>
        </DismissKeyboard>
            

    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        marginTop: Constants.statusBarHeight ,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        color: colors.black,
        fontWeight: "bold",
        fontSize:20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    },
    page:{
        backgroundColor:colors.bgColor,
        flex:1,
    }
})
export default ListingDetailsScreen;