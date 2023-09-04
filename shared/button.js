import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#17a",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "nunito-regular",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default FlatButton;
