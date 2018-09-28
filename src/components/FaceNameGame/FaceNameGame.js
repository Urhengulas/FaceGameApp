import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";

//Components
import { Buttons } from "../Buttons/Buttons";
import { Picture } from "../Picture/Picture.js";
import { Timer } from "../Timer/Timer.js";
import { randomNumber, selectedPersons } from "../../data/functions.js";
import { StartScreen } from "../StartScreen/StartScreen";

//Style
import { FaceNameGameStyle } from "./FaceNameGame.style.js";

//Main component
class FaceNameGame extends Component {
  constructor(props) {
    super(props);
    const dataset = this.getNewDataset();

    this.state = {
      names: dataset["names"],
      rightNumber: dataset["rightNumber"],
      pressed: false
    };

    this.getNewDataset = this.getNewDataset.bind(this);
  }

  //generates a new Dataset with
  getNewDataset = () => ({
    rightNumber: randomNumber(4),
    names: selectedPersons(),
    pressed: false
  });


  testfunction = title => {
    if (title == this.state.names[this.state.rightNumber]["name"]) {

      const dataset = this.getNewDataset();
      this.setState(dataset);
      this.setState({ pressed: true });
    } else {
      //alert("wrong");
      this.props.navigation.navigate('EndScreen')
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
        <StatusBar hidden={true}/>
        <View style={FaceNameGameStyle.timerContainer}>
          {/*<Timer/>*/}
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Ultimate Name Game 3000</Text>
        </View>
        <View style={FaceNameGameStyle.pictureContainer}>
          <Picture path={names[rightNumber]["image"]} style={FaceNameGameStyle.picture}/>
        </View>
        <View style={FaceNameGameStyle.buttonContainer}>
          <Buttons values={names} onClick={title => this.testfunction(title)} pressArray={pressArray}/>
        </View>
      </View>
    );
  }
}

export { FaceNameGame };