import React from 'react';
import{Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function ViewProfileButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.viewProfile} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    viewProfile: {
        backgroundColor: colors.chilliPepper,
        width: '100%',
        borderWidth:1,
        borderColor:'black',
        alignItems: 'center',
        padding:'3%',
        shadowColor: "grey",
        shadowOffset:{width:10, height: 5},
        shadowOpacity:1,
        elevation: 10,
      },

      text:{
          color: colors.brightGold,
          fontSize: Platform.OS === "android" ? 16 : 16,
          fontWeight: "bold",
      }
})

export default ViewProfileButton;