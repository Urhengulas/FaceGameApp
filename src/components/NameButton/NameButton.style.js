import React from "react";
import { StyleSheet } from "react-native";

const NameButtonStyle = StyleSheet.create({
  //container for each TouchableHighlight-Button
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
    //backgroundColor: '#00ff00'
  },
  //style of the pressed Button
  button: {
    alignItems: "center",
    backgroundColor: "#009688",
    padding: 9,
    width: "90%",
    borderRadius: 4,
    elevation: 2
  },
  //style of the TouchableHighlight-Button
  buttonPressed: {
    alignItems: "center",
    backgroundColor: "#da000c",
    padding: 9,
    width: "90%",
    borderRadius: 4,
    elevation: 2
  },
  text: {
    color: "#ffffff",
    padding: "1%",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export { NameButtonStyle };
