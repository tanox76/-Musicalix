import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native'





//import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from './app/navigation/rootNavigation';
import MusicPlayer from "./app/components/MusicPlayer";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ConversationScreen from "./app/screens/ConversationScreen";
import ListingScreen from './app/screens/ListingsScreen';
import ListingEditPage from './app/screens/ListingEditPage';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import UploadScreen from './app/screens/UploadScreen';
import ProfilePage from "./app/screens/ProfilePage";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListingsStack() {
   return (
      <Stack.Navigator screenOptions={{
         headerTitleAlign: 'center',
         headerTintColor: '#fff',
         headerStyle: {
            backgroundColor: "#238FAD"
         }
      }}>
         <Stack.Screen name="ListingsScreen" component={ListingScreen} options={{ headerShown: false }} />
         <Stack.Screen name="ListingsDetailsScreen" component={ListingDetailsScreen} />
         <Stack.Screen name="ListingEditPage" component={ListingEditPage} />
      </Stack.Navigator>
   )
};
function MessagesStack() {
   return (
      <Stack.Navigator screenOptions={{
         headerTitleAlign: 'center',
         headerTintColor: '#fff',
         headerStyle: {
            backgroundColor: "#238FAD"
         }
      }}>
         <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{ headerShown: false }} />
         <Stack.Screen name="ConversationScreen" component={ConversationScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
   )
};
function HomeTabs() {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Profile" component={ProfilePage} />
         <Tab.Screen name="Messages" component={MessagesStack} />
         <Tab.Screen name="Listings" component={ListingsStack} />
      </Tab.Navigator>
   )
};




export default function App() {
   const [user, setUser] = useState();
   const [isReady, setIsReady] = useState(false);
   //const Stack = createStackNavigator();


   const restoreUser = async () => {
      const user = await authStorage.getUser();
      if (user) setUser(user);
   }

   if (!isReady)
      return (
         <AppLoading
            startAsync={restoreUser}
            onFinish={() => setIsReady(true)}
            onError={console.warn}
         />);

   Notifications.setNotificationHandler({
      handleNotification: async () => {
         return {
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
         };
      },
   });


   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
               backgroundColor: "#238FAD"
            }
         }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: true }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
            <Stack.Screen name="Musicalix" component={HomeTabs} options={{ headerShown: false }} />
         </Stack.Navigator>
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

