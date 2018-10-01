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
    this.state = {
      score: 0
    };

    const dataset = this.getNewDataset();

    this.state = {
      names: dataset["names"],
      rightNumber: dataset["rightNumber"],
      score: dataset["score"],
      pressed: dataset["pressed"]
    };

    this.getNewDataset = this.getNewDataset.bind(this);
  }

  static navigationOptions = {
    header: null
  };
  punkte = 0;
  //generates a new Dataset with
  getNewDataset = () => ({
    rightNumber: randomNumber(4),
    names: selectedPersons(),
    score: this.state.score + 1,
    pressed: false
  });

  testfunction = title => {
    if (title == this.state.names[this.state.rightNumber]["name"]) {
      const dataset = this.getNewDataset();
      this.setState(dataset);
      this.setState({ pressed: true });
    } else {
      this.props.navigation.navigate("EndScreen", { score: this.state.score });
    }
  };

  render() {
    var names = this.state.names;
    var rightNumber = this.state.rightNumber;

    let pressArray = [false, false, false, false];
    for (let i = 0; i < 4; i++) {
      if (i != rightNumber) {
        pressArray[i] = this.state.pressed;
      }
    }
    //alert(pressArray);

    return (
      <View style={FaceNameGameStyle.wrapper}>
        <StatusBar hidden={true} />

        <View style={FaceNameGameStyle.pictureContainer}>
          <Picture
            path={names[rightNumber]["image"]}
            style={FaceNameGameStyle.picture}
          />
        </View>
        <View style={FaceNameGameStyle.buttonContainer}>
          <Buttons
            values={names}
            onClick={title => this.testfunction(title)}
            pressArray={pressArray}
          />
        </View>
      </View>
    );
  }
}

export { FaceNameGame };
