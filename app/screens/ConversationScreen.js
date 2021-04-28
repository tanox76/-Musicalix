// import React, { Component } from 'react';
// import { View, Text, Screen, StyleSheet } from 'react-native';
// import colors from '../config/colors';
// import defaultStyles from "../config/styles";
// //import styles from '../config/styles';

// export default class Conversation extends Component {
//     state = {
//         title: this.props.route.params.item,
//     };


//     render() {
//         const { title } = this.state;
//         return (
//             <Screen style={styles.background}>
//                 <View>
//                     <Text>{title}</Text>
//                 </View>
//             </Screen>

//         );
//     }
// }
// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         backgroundColor: colors.bgColor,
//     },
//     container: {

//         padding: 20,
//         //backgroundColor: colors.bgColor,
//     },
//     header: {
//         fontSize: 25,
//         textAlign: 'center',
//         margin: 10,
//         fontWeight: 'bold'
//     },
//     inputContainer: {
//         paddingTop: 15
//     },
//     textInput: {
//         backgroundColor: defaultStyles.colors.white,
//         borderRadius: 25,
//         flexDirection: "row",
//         padding: 10,
//         marginVertical: 5,
//     },
//     logo: {
//         width: 240,
//         height: 200,
//         alignSelf: "center",
//         marginTop: 50,
//         marginBottom: 40,
//         marginLeft: 30,
//     },
//     location: {
//         backgroundColor: defaultStyles.colors.white,
//         borderRadius: 25,
//         flexDirection: "row",
//         padding: 10,
//         marginVertical: 5,
//     },
//     appTextLocation: {
//         color: defaultStyles.colors.inputText,
//     },
//     button: {
//         backgroundColor: colors.buttonColor,
//         borderRadius: 25,
//         justifyContent: "center",
//         alignItems: "center",
//         //padding: 15,
//         width: '100%',
//         margin: 5,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     register: {
//         marginTop: 20,
//     },
//     screen: {
//         backgroundColor: colors.bgColor,
//     },
//     TouchableOpacityStyle: {

//         //position: 'absolute',
//         //width: 50,
//         height: 50,
//         alignItems: 'flex-start',
//         backgroundColor: colors.buttonColor,
//         opacity: 0.7,
//         margin: 10,
//         //justifyContent: 'left',
//         //right: 30,
//         //bottom: 30,
//     },
// });

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const ConversationScreen = ({ route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Values passed from First page: {route.params.paramKey}
                </Text>
            </View>

        </SafeAreaView>
    );
};

export default ConversationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
});
