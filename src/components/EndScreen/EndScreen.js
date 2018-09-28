import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";

//Components
import { NameButton } from "../NameButton/NameButton";
import { EndStyle } from "./EndScreen.style.js";

//main Component of the app
class EndScreen extends Component {
  render() {
    return (
      <View style={EndStyle.wrapper}>
        <Text>End Screen</Text>
        <NameButton
          name="Restart Game"
          onClick={() => this.props.navigation.navigate('FaceNameGame')}
        />
        <NameButton
          name="Go to main menue"
          onClick={() => this.props.navigation.navigate('StartScreen')}
        />

      </View>
    );
  }
}

export { EndScreen };