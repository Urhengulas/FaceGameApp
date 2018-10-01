import React from "react";
import { StyleSheet } from "react-native";

const PictureStyle = StyleSheet.create({
  imageField: {
    flex: 2,
    //backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  images: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    borderRadius: 6,
  }
});

export { PictureStyle };
