import React, { useState, useEffect, Component } from 'react';
import { TextInput, StyleSheet, Image, View, Text, Button, ScrollView } from 'react-native';
import firebase from '../../firebaseDB';


import * as Yup from 'yup';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import ValueTextInput from '../components/ValueTextInput'


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

import "../../app/global"

console.log("global name is: ", global.name)
console.log("global email is: ", global.email)


const RegisterScreen = ({ navigation }) => {

    const [Name, setName] = React.useState("");
    const [Pass, setPass] = React.useState("");
    const [CPass, setCPass] = React.useState("");
    const [Address, setAddress] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Stage, setStage] = React.useState("");
    const [Skill, setSkill] = React.useState("");
    const [Experience, setExperience] = React.useState("");
    const [Education, setEducation] = React.useState("");
    const [Genre, setGenre] = React.useState("");
    const [Instrument, setInstrument] = React.useState("");
    const [Software, setSoftware] = React.useState("");

    const db = firebase.firestore();

    const handleNameChange = (name) => { setName(name); global.name = name; }
    const handlePassChange = (pass) => { setPass(pass); }
    const handlePassCheck = (Cpass) => { setCPass(Cpass); }
    const handleAddressChange = (address) => { setAddress(address); global.address = address; }
    const handleEmailChange = (email) => { setEmail(email); global.email = email }
    const handleStageChange = (stage) => { setStage(stage); global.stage = stage; }
    const handleSkillChange = (skill) => { setSkill(skill); global.skill = skill; }
    const handleExperienceChange = (experience) => { setExperience(experience); global.experience = experience; }
    const handleEducationChange = (education) => { setEducation(education); global.education = education; }
    const handleGenreChange = (genre) => { setGenre(genre); global.genre = genre; }
    const handleInstrumentChange = (instrument) => { setInstrument(instrument); global.instrument = instrument; }
    const handleSoftwareChange = (software) => { setSoftware(software); global.software = software; }

    const addValue = () => {
        if (Name != "") {
            if (Pass != "") {
                if (Email != "") {
                    if (CPass == Pass) {
                        console.log("same pass");

                        db.collection("Users").doc(Email)
                            .update({
                                // name: Name,
                                // pass: Pass,
                                // address: Address,
                                // email: Email,
                                // stage: Stage,
                                // skill: Skill
                            })
                            .then(() => {
                                alert("Email already exists")
                                //global.name = Name;
                                //globbal.email = Email;
                                //navigation.navigate("Musicalix");
                                // update successful (document exists)
                            })
                            .catch((error) => {
                                db.collection("Users").doc(Email)
                                    .set({
                                        name: Name,
                                        pass: Pass,
                                        address: Address,
                                        email: Email,
                                        stage: Stage,
                                        skill: Skill,
                                        experience: Experience,
                                        education: Education,
                                        genre: Genre,
                                        instrument: Instrument,
                                        software: Software,
                                    });
                                alert("User created successfully!");
                                global.name = Name
                                global.email = Email
                                navigation.navigate("Musicalix");
                            });
                    }
                    else {
                        console.log("different pass");
                        alert("different pass");
                    }
                }
                else {
                    alert("Empty Email field");
                }
            }
            else {
                alert("Empty Password field");
            }

        }
        else {
            alert("Empty Name field");
        }




    };


    const checkUser = () => {

        var docRef = db.collection("Users").doc(Email)
        docRef.get().then((doc) => {
            if (doc.exists) {
                setName(doc.data().name);
                setPass(doc.data().pass);
                setAddress(doc.data().address);
                setSkill(doc.data().skill);
                setEmail(doc.data().email);
                setStage(doc.data().stage);

                global.name = doc.data().name;
                globbal.email = doc.data().email;
            }
            else {
                console.log("no such document");
            }
        });
    };







    return (

        <View style={styles.background}>
            <ScrollView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logoCol.png')} />
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Name"
                        autoCompleteType="name"
                        value={Name}
                        onChangeText={handleNameChange}
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
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        autoCompleteType="password"
                        secureTextEntry={true}
                        value={CPass}
                        onChangeText={handlePassCheck}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="eMail"
                        autoCompleteType="email"
                        value={Email}
                        onChangeText={handleEmailChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Adress"
                        autoCompleteType="street-address"
                        value={Address}
                        onChangeText={handleAddressChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Stage Name"
                        value={Stage}
                        onChangeText={handleStageChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Skill"
                        value={Skill}
                        onChangeText={handleSkillChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Experience"
                        value={Experience}
                        onChangeText={handleExperienceChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Education"
                        value={Education}
                        onChangeText={handleEducationChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Music Genre"
                        value={Genre}
                        onChangeText={handleGenreChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Instrument Played"
                        value={Instrument}
                        onChangeText={handleInstrumentChange}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Software Used"
                        value={Software}
                        onChangeText={handleSoftwareChange}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Add User'
                        onPress={() => addValue()}
                        color="#fff"
                    />

                </View>

            </ScrollView>
        </View>



        // <View style={styles.container}>
        //     <View>
        //         <Text style={styles.header}>Register</Text>
        //         <ScrollView>
        //             <View style={styles.inputContainer}>
        //                 <TextInput
        //                     style={styles.textInput}
        //                     placeholder="Your name"
        //                     maxLength={20}
        //                     value={Name}
        //                     onChangeText={handleNameChange}
        //                 />
        //             </View>
        //             <View style={styles.inputContainer}>
        //                 <TextInput
        //                     style={styles.textInput}
        //                     placeholder="Your pass"
        //                     maxLength={20}
        //                     value={Pass}
        //                     onChangeText={handlePassChange}
        //                 />
        //             </View>
        //             <View style={styles.button}>
        //                 <Button
        //                     title='Add User'
        //                     onPress={() => addValue()}
        //                     color="#19AC52"
        //                 />
        //             </View>
        //         </ScrollView>
        //     </View>
        // </View>



    );
};
export default RegisterScreen;

// const validationSchema = Yup.object().shape({
//     name: Yup.string().required().label("Name"),
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password")
// });


// function RegisterScreen(props) {



//     const registerApi = useApi(usersApi.register);
//     const loginApi = useApi(authApi.login);
//     const auth = useAuth();
//     const [error, setError] = useState();
//     const location = useLocation();
//     const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
//         'Wait, we are fetching you location...'
//       );

//     const handleSubmit = async (userInfo) => {
//         const result = await registerApi.request(userInfo);

//         if (!result.ok){
//             if (result.data) setError(result.data.error);
//             else {
//                 setError("An unexpected error occurred.");
//                 console.log(result);
//             }
//             return;
//         }

//     const { data: authToken } = await loginApi.request(
//       userInfo.email,
//       userInfo.password
//     );
//     auth.logIn(authToken);
//   };

//     useEffect(() => {
//         GetCurrentLocation();
//     }, []);

//     // create the handler method

//     const GetCurrentLocation = async () => {
//         let { status } = await Location.requestPermissionsAsync();

//         if (status !== 'granted') {
//         Alert.alert(
//             'Permission not granted',
//             'Allow the app to use location service.',
//             [{ text: 'OK' }],
//             { cancelable: false }
//         );
//         }

//         let { coords } = await Location.getCurrentPositionAsync();
//         if (coords) {
//         const { latitude, longitude } = coords;
//         let response = await Location.reverseGeocodeAsync({
//             latitude,
//             longitude
//         });

//             for (let item of response) {
//                 let address = ` ${item.street}, ${item.postalCode}, ${item.city}`;

//                 setDisplayCurrentAddress(address);
//             }
//         }


//     };

//     return (

//         <>

//             <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
//             <Screen style={styles.container}>
//                 <Image style={styles.logo} source={require('../assets/logoCol.png')}/>

//                 <ValueTextInput>

//                </ValueTextInput>





//                 <Form 
//                     initialValues={{ name: "", email: "", password: ""}}
//                     onSubmit={handleSubmit}
//                     validationSchema={validationSchema}
//                 >
//                     <ErrorMessage error={error} visible={error} />
//                     <FormField 

//                         autoCorrect={false}
//                         icon="account"
//                         name="name"
//                         placeholder="Artist Name"

//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         icon="email"
//                         keyboardType="email-address"
//                         name="email"
//                         placeholder="Email"
//                         textContentType="emailAddress"
//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         icon="lock"
//                         name="password"
//                         placeholder="Password"
//                         secureTextEntry
//                         textContentType="password"
//                     />
//                     <View style={styles.location}>
//                     <Entypo
//                         style={{marginRight:5, paddingLeft:6}}
//                         name="address"
//                         size={20}
//                         color={defaultStyles.colors.inputIcon}
//                         />
//                         <AppText style={styles.appTextLocation}> {displayCurrentAddress}</AppText>
//                     </View>
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         name="skill"
//                         icon="account-details"
//                         placeholder="Skills"
//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         name="experience"
//                         icon="account-details"
//                         placeholder="Experience"
//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         name="education"
//                         icon="account-details"
//                         placeholder="Education"
//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         name="musicgenre"
//                         icon="account-details"
//                         placeholder="Music Genre"
//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         name="instruments"
//                         icon="account-details"
//                         placeholder="Instruments Played"
//                     />
//                     <FormField 
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         name="softwareused"
//                         icon="account-details"
//                         placeholder="Software Used"
//                     />
//                     <View style={styles.button}>
//                         <SubmitButton  title="Register" />
//                     </View>

//                 </Form>
//             </Screen>

//         </>
//     );
// }

// const styles = StyleSheet.create({
//     textContainer: {
//         backgroundColor: defaultStyles.colors.white,
//         borderRadius: 25,
//         flexDirection: "row",
//         padding: 2,
//         marginVertical: 5,
//       },
//     container:{
//         padding: 20,
//         backgroundColor: colors.bgColor,
//     },
//     logo: {
//         width: 120,
//         height: 100,
//         alignSelf: "center",
//         // marginTop: 5,
//         marginBottom: 10,
//     },
//     location:{
//         backgroundColor: defaultStyles.colors.white,
//         borderRadius: 25,
//         flexDirection: "row",
//         padding: 10,
//         marginVertical: 5,
//     },
//     appTextLocation:{
//         color: defaultStyles.colors.inputText,
//     }, 
//     button:{
//         marginTop: 5
//     }
// });

// export default RegisterScreen;

// const userDocument = firestore()
//   .collection('Users')
//   .doc('ABC');



//import { DocumentSnapshot } from '@google-cloud/firestore';
//import FireBaseConnection from '../../functions/FirebaseConnection'

//const Firebase = FireBaseConnection;






// 

//       storeUser() {
//         if(this.state.Name === ''){
//          alert('Fill at least your name!')
//         } else {
//           this.setState({
//             isLoading: true,
//           });
//           //this.dbRef.collection('Users').doc(this.state.Name);

//           this.dbRef.add({
//             name: this.state.Name,
//             pass: this.state.Pass,
//           }).then((res) => {
//             this.setState({
//               name: '',
//               pass: '',
//               isLoading: false,
//             });
//             //this.props.navigation.navigate('UserScreen')
//           })
//           .catch((err) => {
//             console.error("Error found: ", err);
//             this.setState({
//               isLoading: false,
//             });
//           });
//         }
//       }

//     render() {
//       return (
//         <View style={styles.container}>
//           <View>
//             <Text style={styles.header}>Register</Text>
//             <ScrollView>
//                 <View style={styles.inputContainer}>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Your name"
//                         maxLength={20}
//                         value={this.state.Name}
//                         onChangeText={this.handleNameChange}
//                     />
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Your pass"
//                         maxLength={20}
//                         value={this.state.Pass}
//                         onChangeText={this.handlePassChange}
//                     />
//                 </View>
//                 <View style={styles.button}>
//                     <Button
//                         title='Add User'
//                         onPress={() => this.storeUser()} 
//                         color="#19AC52"
//                     />
//                 </View>
//             </ScrollView>
//           </View>
//         </View>


//       );
//     }
//   }

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
        width: 120,
        height: 100,
        alignSelf: "center",
        // marginTop: 5,
        marginBottom: 10,
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
        width: '100%'
    }
});

