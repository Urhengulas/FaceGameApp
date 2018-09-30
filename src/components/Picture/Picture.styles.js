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
    width: 400,
    height: 400,
    resizeMode: "contain"
  }
});

export { PictureStyle };
