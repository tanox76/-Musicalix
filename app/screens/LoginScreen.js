import React, { useState, useEffect, Component } from 'react';
import { TextInput, StyleSheet, Image, View, Text, Button, ScrollView } from 'react-native';
import firebase from '../../firebaseDB';
import { useDeviceOrientation } from '@react-native-community/hooks';



import * as Yup from 'yup';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import ValueTextInput from '../components/ValueTextInput'

import "../../app/global"


import Screen from '../components/Screen';
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  AppForm as Form,
  AppFormField as FormField,
  ErrorMessage,
  SubmitButton
} from '../components/forms';
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from '../config/colors';
import useLocation from '../hooks/useLocation';
import AppText from '../components/AppText';
import defaultStyles from "../config/styles";
import Homescreen from "./HomeScreen";




console.log("global variable is: ", global.name)



const LoginScreen = ({ navigation }) => {

  const [Email, setEmail] = React.useState("");
  const [Pass, setPass] = React.useState("");

  const setStartEmail = () => { setEmail(global.email) };
  const setStartPass = () => { setPass(global.pass) };

  const db = firebase.firestore();

  const handleEmailChange = (email) => { setEmail(email); }
  const handlePassChange = (pass) => { setPass(pass); }

  const loginSuccess = () => {
    alert("Login Successful!");
    navigation.navigate("Musicalix");
  }

  const login = () => {



    var docRef = db.collection("Users").doc(Email)
    docRef.get().then((doc) => {
      if (doc.exists) {
        if (Email == doc.data().email) {
          if (Pass == doc.data().pass) {
            global.name = doc.data().name;
            global.email = doc.data().email;
            global.address = doc.data().address;
            global.skill = doc.data().skill;
            global.stage = doc.data().stage;
            global.experience = doc.data().experience;
            global.genre = doc.data().genre;
            global.instrument = doc.data().instrument;
            global.software = doc.data().software;
            loginSuccess();

          }
          else {
            alert("Wrong Password");
          }
        }
        else {
          alert("Wrong Email");
        }
      }
      else {
        console.log("no such document");
        alert("No such user, please sign up!");
      }
    });
  };

  const fastLogin = () => {
    setStartEmail();
    setStartPass();
  }






  return (

    <View style={styles.background}>
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logoCol.png')} />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            autoCompleteType="email"
            value={Email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            autoCompleteType="password"
            value={Pass}
            onChangeText={handlePassChange}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Login'
            onPress={() => login()}
            color="#fff"
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Fast Login'
            onPress={() => fastLogin()}
            color="#fff"
          />
        </View>
      </ScrollView>
    </View >

  );
};





const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  container: {

    padding: 20,
    //backgroundColor: colors.bgColor,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  logo: {
    width: 240,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 30,
  },
  location: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  appTextLocation: {
    color: defaultStyles.colors.inputText,
  },
  button: {
    backgroundColor: colors.buttonColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: '100%',
    margin: 10
  },
  register: {
    marginTop: 20,
  }
});




// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen({ navigation }) {
//   const auth = useAuth();
//   const [loginFailed, setLoginFailed] = useState(false);

//   const handleSubmit = async ({ email, password }) => {
//     const result = await authApi.login(email, password);
//     if (!result.ok) return setLoginFailed(true);
//     setLoginFailed(false)
//     auth.logIn(result.data);
//   };

//   return (
//     <Screen style={styles.container}>
//       <Image style={styles.logo} source={require("../assets/logoCol.png")} />

//       <AppForm
//         initialValues={{ email: "", password: "" }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <ErrorMessage
//           error="Invalid email and/or password."
//           visible={loginFailed}
//         />
//         <AppFormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="email"
//           keyboardType="email-address"
//           name="email"
//           placeholder="Email"
//           textContentType="emailAddress"
//         />
//         <AppFormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           name="password"
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//         />
//         <View style={styles.register}>
//           <SubmitButton title="Login" />
//         </View>
//       </AppForm>
//       <View style={styles.register}>
//         <AppButton

//             title="Register"
//             color="secondary"
//             onPress={() => navigation.navigate(routes.REGISTER)}
//           />
//       </View>
//     </Screen>
//   );
// }


export default LoginScreen;
