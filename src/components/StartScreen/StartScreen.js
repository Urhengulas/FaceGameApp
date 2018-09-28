import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";

//Components
import { NameButton } from "../NameButton/NameButton";
import { StartStyle } from "./StartScreen.style.js";

//main Component of the app
class StartScreen extends Component {
  render() {
    return (
      <View style={StartStyle.wrapper}>
        <Text>Home Screen</Text>
        <NameButton
          name="Start Game"
          onClick={() => this.props.navigation.navigate('FaceNameGame')}
        />
      </View>
    );
  }
}

export { StartScreen };