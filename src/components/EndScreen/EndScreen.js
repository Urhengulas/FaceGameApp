import React, { Component } from "react";
import { Text, View } from "react-native";
//Components
import { NameButton } from "../NameButton/NameButton";
import { EndStyle } from "./EndScreen.style.js";

//main Component of the app
class EndScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={EndStyle.wrapper}>
        <View style={EndStyle.textContainer}>
          <Text style={EndStyle.gameOverText}>Game over</Text>
          <Text style={EndStyle.scoreText}>
            {"Your score is:\n" +
              this.props.navigation.getParam("score", "no score")}
          </Text>
        </View>
        <View style={EndStyle.buttonContainer}>
          <NameButton
            name="Restart Game"
            onClick={() => this.props.navigation.push("FaceNameGame")}
          />
          <NameButton
            name="Go to main menue"
            onClick={() => this.props.navigation.navigate("StartScreen")}
          />
        </View>
      </View>
    );
  }
}

export { EndScreen };
