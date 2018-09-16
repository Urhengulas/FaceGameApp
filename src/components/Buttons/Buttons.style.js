import React, { Component } from "react";
import { StyleSheet } from "react-native";

const ButtonsStyle = StyleSheet.create({
  ButtonField: {
    flex: 1,
    //backgroundColor: 'green',
    flexDirection: "row"
  },

  left: {
    flex: 1,
    //  backgroundColor: 'blue',
    flexDirection: "column"
  },

  right: {
    flex: 1,
    //  backgroundColor: 'yellow',
    flexDirection: "column"
  }
});

export { ButtonsStyle };
