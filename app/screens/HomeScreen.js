import React, { useState } from "react";
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';


import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import MessagesScreen from "./MessagesScreen";
import ListingScreen from './ListingsScreen';
import ListingEditPage from './ListingEditPage';
import ListingDetailsScreen from './ListingDetailsScreen';
import UploadScreen from './UploadScreen';
import ProfilePage from "./ProfilePage";





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListingsStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: 'blue'
            }
        }}>
            <Stack.Screen name="ListingsScreen" component={ListingScreen} />
            <Stack.Screen name="ListingsDetailsScreen" component={ListingDetailsScreen} />
            <Stack.Screen name="ListingEditPage" component={ListingEditPage} />
        </Stack.Navigator>
    )
}


export default function App() {



    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfilePage} />
                <Tab.Screen name="Messages" component={MessagesScreen} />
                <Tab.Screen name="Listings" component={ListingsStack} />
            </Tab.Navigator>
        </NavigationContainer>
        //   <AuthContext.Provider value={{user, setUser}}>
        //    {/* <OfflineNotice/> */}
        //    <NavigationContainer ref={navigationRef} theme={ navigationTheme }>
        //       {user ? <AppNavigator /> : <AuthNavigator />}
        //    </NavigationContainer>
        //    </AuthContext.Provider>

        // <MusicPlayer/>
    );
}

