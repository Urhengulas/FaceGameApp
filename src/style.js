import React, { Component } from "react";
import { StyleSheet } from "react-native";

// BEM, OOS

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    height: "100%"
  },

  upper: {
    flex: 2,
    //backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center"
  },

  boxes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderRadius: 5,
    //backgroundColor: 'hotpink',
    margin: 6
  },

  lower: {
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
  },

  images: {
    width: 200
  }
});
