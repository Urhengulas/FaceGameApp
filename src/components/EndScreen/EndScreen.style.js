import React from "react";
import { StyleSheet } from "react-native";

const EndStyle = StyleSheet.create({
  //style of whole screen
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: '#0000ff'
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 3,
    //backgroundColor: '#ff0000',
    width: "100%"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    marginBottom: "5%",
    //backgroundColor: '#00ff00',
    width: "100%"
  }
});

export { EndStyle };