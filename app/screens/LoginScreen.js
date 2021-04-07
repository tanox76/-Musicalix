import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from "../components/forms";
import authApi from '../api/auth';
import useAuth from "../auth/useAuth";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false)
    auth.logIn(result.data);
  };
  
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logoCol.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.register}>
          <SubmitButton title="Login" />
        </View>
      </AppForm>
      <View style={styles.register}>
        <AppButton
            
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.bgColor,
  },
  logo: {
    width: 240,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 30,
  },
  register:{
    marginTop: 20,
  }
});

export default LoginScreen;
