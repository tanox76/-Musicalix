import React from "react";
import { View, TextInput, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ValueTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  };
  
  const ValueTextInputMultiline = () => {
    const [value, onChangeText] = React.useState('Value Multiline Placeholder');
    //console.log(value);
  return (
      <View style={[styles.container]}>
        {/* {icon && (
          <MaterialCommunityIcons
            //name={icon}
            //size={20}
            //color={defaultStyles.colors.inputIcon}
            //style={styles.icon}
          />
        )} */}
        <TextInput
            multiline
            numberOfLines={4}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholderTextColor={defaultStyles.colors.inputText}
            style={defaultStyles.text}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 2,
    marginVertical: 5,
  },
  icon: {
    padding:8,
    marginRight: 8,
  },
});

export default ValueTextInputMultiline;
