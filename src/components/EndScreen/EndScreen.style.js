import React from "react";
import { StyleSheet } from "react-native";

const EndStyle = StyleSheet.create({
  //style of whole screen
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AC3B3B"
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
  },

  gameOverText: {
    fontSize: 120,
    fontWeight: "bold",
    textAlign: "center"
  },

  scoreText: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export { EndStyle };
