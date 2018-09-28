import React from "react";
import { StyleSheet } from "react-native";

const StartStyle = StyleSheet.create({
  //style of whole screen
  //style of whole screen
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
    //backgroundColor: '#ffff00',
  },

  //style of container of timer
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: '#ff0000',
    flexGrow: 3,
    width: "100%"
  },

  //style of container of buttons
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexGrow: 1,
    marginBottom: "8%"
    //backgroundColor: '#f000f0',
    //     width: '100%'
  }
});

export { StartStyle };
