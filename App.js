
import React from 'react';
import { View } from 'react-native';

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Card from './app/components/Card';
import ViewProfileButton from './app/components/ViewProfileButton';
import ProfilePage from './app/screens/ProfilePage';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App(){
   return  <WelcomeScreen/>
  //  <View style={{
  //    backgroundColor: '#f8f4f4',
  //    padding: 20,
  //    paddingTop: 80
  //  }}>
  //    <Card 
  //    name="Anton Oceanu"
  //    profession="Music Producer"
  //    location="Portsmouth"
  //   image={require("./app/assets/picture.jpg")}/>
  //   < ViewProfileButton title="View Profile"/> 
  //  </View>
   ;
}
