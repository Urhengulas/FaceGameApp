import React, { Component } from "react";
import { StatusBar, Text, View } from "react-native";
//Components
import { NameButton } from "../NameButton/NameButton";
import { ScoreStyle } from "./ScoreBoard.style.js";

//main Component of the app
class ScoreBoard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={ScoreStyle.wrapper}>
        <StatusBar hidden={true} />
        <View style={ScoreStyle.textContainer}>
          <Text>Score Board</Text>
        </View>
        <View style={ScoreStyle.buttonContainer}>
          <NameButton
            name="Return to Homescreen"
            onClick={() => this.props.navigation.navigate("StartScreen")}
          />
        </View>
      </View>
    );
  }
}

export { ScoreBoard };
