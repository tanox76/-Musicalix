import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform} from 'react-native';
import { useDeviceOrientation} from '@react-native-community/hooks';

import FacebookButton from '../components/FacebookButton';
import GoogleButton from '../components/GoogleButton';
import GmailButton from '../components/GmailButton';
import SignupButton from '../components/SignupButton';

function WelcomeScreen(props) {
    const {landscape} = useDeviceOrientation();
  return (
    <View style={{
      backgroundColor: "white",
      flex:1,
    }}> 
      <View style={{flex:1,alignItems:'center',}}><Image
        style={styles.logo}
        source={
          require('../assets/logo.png')
            }
            resizeMode="center"
        /></View>

      <View style={{flex:0.5,}}><Text style={styles.titleContainer}> Musicalix </Text></View>

      <View style={{flex:0.5,}}><Text style={styles.textContainer}> Login or create account </Text></View>

      <View 
      style={{flex:1, 
        // marginTop:'10%',
        marginBottom:'10%',
        justifyContent: 'center',
        alignItems: 'center',}}>
        < SignupButton title = "Sign Up" />      
        < FacebookButton title = "Login with Facebook" onPress={() => { Linking.openURL('https://Facebook.com');} }/>
        < GoogleButton title = "Login with Google" onPress ={() => { Linking.openURL('https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin');}}/>
        < GmailButton title = "Sign in with Email" onPress ={() => { Linking.openURL('https://www.google.com/intl/en-GB/gmail/about/#');}}/>
      </View>       
    </View>     

    
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: '10%' ,
    marginLeft: 0,
    width: '60%',
    height: '100%',
    marginBottom: '20%',
  },
  textContainer: {
    fontSize: 20,
    marginTop: Platform.OS === "android" ? '25%' : '30%', 
    textAlign: 'center',
    color: 'black',
    fontWeight: "bold",
    paddingBottom: Platform.OS === "android" ? '0%' : '10%',
  },
  titleContainer:{
    fontSize: 54,
    marginTop: '20%',
    textAlign: 'center',
    color: 'dodgerblue',
  }
});

export default WelcomeScreen;