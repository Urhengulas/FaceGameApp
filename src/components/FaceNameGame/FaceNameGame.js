import React, { Component } from "react";
import { StatusBar, Text, View } from "react-native";
//Components
import { Buttons } from "../Buttons/Buttons";
import { Picture } from "../Picture/Picture.js";

import { randomNumber, selectedPersons } from "../../data/functions.js";
//Style
import { FaceNameGameStyle } from "./FaceNameGame.style.js";

//Main component
class FaceNameGame extends Component {
  constructor(props) {
    super(props);

    this.state = this.getNewDataset(0); // initialize score with 0
  }

  static navigationOptions = {
    header: null
  };

  //generates a new Dataset with
  getNewDataset = points => ({
    rightNumber: randomNumber(4),
    names: selectedPersons(),
    score: points,
    bgColor: "#ffffff"
  });

  testfunction = title => {
    if (title == this.state.names[this.state.rightNumber]["name"]) {
      this.setState({ bgColor: "#00ff00" });
      setTimeout(() => {
        this.setState(this.getNewDataset(this.state.score + 1));
      }, 500);
    } else {
      this.setState({ bgColor: "#AC3B3B" });
      setTimeout(() => {
        this.props.navigation.navigate("EndScreen", {
          score: this.state.score
        });
      }, 500);
    }
  };

  render() {
    const names = this.state.names;
    const rightNumber = this.state.rightNumber;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: this.state.bgColor
        }}
      >
        <StatusBar hidden={true} />
        <View style={FaceNameGameStyle.pictureContainer}>
          <Picture
            path={names[rightNumber]["image"]}
            style={FaceNameGameStyle.picture}
          />
        </View>
        <View style={FaceNameGameStyle.buttonContainer}>
          <Buttons values={names} onClick={title => this.testfunction(title)} />
        </View>
      </View>
    );
  }
}

export { FaceNameGame };
