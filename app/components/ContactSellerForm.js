import React from "react";
import { Alert, Keyboard, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    const content = {
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    };
    Notifications.scheduleNotificationAsync({
      content,
      trigger: null}
    );
  };

  return (
    <View style={{marginTop:200}}>
      <AppForm
        
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
          
        <AppFormField
          style={{marginRight:45, fontSize:  18}}
          icon="message-processing-outline"
          maxLength={150}
          name="message"
          numberOfLines={2}
          placeholder="Type the message here..."
        />
        <SubmitButton title="Contact artist" />
      </AppForm>
    </View>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
