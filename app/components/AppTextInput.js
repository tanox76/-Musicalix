import React from "react";
import { View, TextInput, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { SafeAreaView } from "react-native-safe-area-context";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
      <View style={[styles.container, { width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.inputIcon}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={defaultStyles.colors.inputText}
          style={defaultStyles.text}
          {...otherProps}
          
        />
      </View>
  );
}

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

export default AppTextInput;
