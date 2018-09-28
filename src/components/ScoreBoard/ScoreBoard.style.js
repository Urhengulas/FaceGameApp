import React from "react";
import { StyleSheet } from "react-native";

const ScoreStyle = StyleSheet.create({
  //style of whole screen
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  //style of container of timer
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    //backgroundColor: '#ff0000',
    flexGrow: 1
  },

  //style of container of buttons
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 3
    //backgroundColor: '#f000f0',
  }
});

export { ScoreStyle };
