import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Keyboard, TouchableWithoutFeedback } from "react-native";

function Screen({ children, style }) {
  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
        {children}
    </TouchableWithoutFeedback>
);
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <DismissKeyboard>
        <View style={[styles.view, style]}>{children}</View>
      </DismissKeyboard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
