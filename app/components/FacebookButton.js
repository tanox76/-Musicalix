import React from 'react';
import{Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';

function FacebookButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.facebookContainer} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    facebookContainer: {
        margin: 5,
        backgroundColor:'blue',
        width: '60%',
        borderWidth:1,
        borderColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'3%',
        shadowColor: "grey",
        shadowOffset:{width:10, height: 5},
        shadowOpacity:1,
        elevation: 10,
      },

      text:{
          color: "white",
          fontSize: Platform.OS === "android" ? 16 : 19,
          fontWeight: "bold",
      }
})
export default FacebookButton;