import React from 'react';
import{Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';

function GoogleButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.googleContainer} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    googleContainer: {
        margin: 5,
        backgroundColor:'cornsilk',
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
          color: "black",
          fontSize: Platform.OS === "android" ? 16 : 19,
          fontWeight: "bold",
      }
})
export default GoogleButton;