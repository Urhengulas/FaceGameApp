import React, { Component } from "react";
import { View, Button } from "react-native";

import { NameButtonStyle } from "./NameButton.style.js";

const NameButton = ({ onClick, name }) => (
  <View style={NameButtonStyle.Button}>
    <Button onPress={onClick} title={name} color="#000000" />
  </View>
);

export { NameButton };
