import React, { Component } from "react";
import { StatusBar, Text, View, Image } from "react-native";
//Components
import { NameButton } from "../NameButton/NameButton";
import { StartStyle } from "./StartScreen.style.js";

//main Component of the app
class StartScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={StartStyle.wrapper}>
        <StatusBar hidden={true} />
        <View style={StartStyle.textContainer}>
          <Image
            source={require("./Logo.png")}
            style={{ width: 310, resizeMode: "contain" }}
          />
        </View>
        <View style={StartStyle.buttonContainer}>
          <NameButton
            name="Start Game"
            onClick={() => this.props.navigation.navigate("FaceNameGame")}
          />
          <NameButton
            name="ScoreBoard"
            onClick={() => this.props.navigation.navigate("ScoreBoard")}
          />
        </View>
      </View>
    );
  }
}

export { StartScreen };
