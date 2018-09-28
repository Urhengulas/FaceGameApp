import React, { Component } from "react";
import { StatusBar, Text, View } from "react-native";
//Components
import { NameButton } from "../NameButton/NameButton";
import { StartStyle } from "./StartScreen.style.js";

//main Component of the app
class StartScreen extends Component {
  render() {
    return (
      <View style={StartStyle.wrapper}>
        <StatusBar hidden={true}/>
        <View style={StartStyle.textContainer}>
          <Text style={{ fontSize: 100 }}>{"C<>DE"}</Text>
          <Text style={{ fontSize: 50 }}>NAME</Text>
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