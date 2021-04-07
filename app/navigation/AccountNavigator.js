import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "../screens/ProfilePage";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={ProfilePage} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
