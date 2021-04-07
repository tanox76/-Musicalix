import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 


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

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();
    const location = useLocation();
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'Wait, we are fetching you location...'
      );

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok){
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

    useEffect(() => {
        GetCurrentLocation();
    }, []);
    
    // create the handler method
    
    const GetCurrentLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
    
        if (status !== 'granted') {
        Alert.alert(
            'Permission not granted',
            'Allow the app to use location service.',
            [{ text: 'OK' }],
            { cancelable: false }
        );
        }
    
        let { coords } = await Location.getCurrentPositionAsync();
        if (coords) {
        const { latitude, longitude } = coords;
        let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
        });
    
            for (let item of response) {
                let address = ` ${item.street}, ${item.postalCode}, ${item.city}`;
        
                setDisplayCurrentAddress(address);
            }
        }
    };

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logoCol.png')}/>
               
                <Form 
                    initialValues={{ name: "", email: "", password: ""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <FormField 
                        
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Artist Name"
                        
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <View style={styles.location}>
                    <Entypo
                        style={{marginRight:5, paddingLeft:6}}
                        name="address"
                        size={20}
                        color={defaultStyles.colors.inputIcon}
                        />
                        <AppText style={styles.appTextLocation}> {displayCurrentAddress}</AppText>
                    </View>
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="skill"
                        icon="account-details"
                        placeholder="Skills"
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="experience"
                        icon="account-details"
                        placeholder="Experience"
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="education"
                        icon="account-details"
                        placeholder="Education"
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="musicgenre"
                        icon="account-details"
                        placeholder="Music Genre"
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="instruments"
                        icon="account-details"
                        placeholder="Instruments Played"
                    />
                    <FormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="softwareused"
                        icon="account-details"
                        placeholder="Software Used"
                    />
                    <View style={styles.button}>
                        <SubmitButton  title="Register" />
                    </View>
                    
                </Form>
            </Screen>
            
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: colors.bgColor,
    },
    logo: {
        width: 120,
        height: 100,
        alignSelf: "center",
        // marginTop: 5,
        marginBottom: 10,
    },
    location:{
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        marginVertical: 5,
    },
    appTextLocation:{
        color: defaultStyles.colors.inputText,
    }, 
    button:{
        marginTop: 5
    }
});

export default RegisterScreen;