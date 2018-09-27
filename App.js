import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";

import { Buttons } from "./src/components/Buttons/Buttons";
import { Picture } from "./src/components/Picture/Picture.js";
//import { Timer } from " ./src/components/Timer/Timer";

import { AppStyle } from "./App.style.js";
import { randomNumber, selectedPersons } from "./src/data/functions.js";

//const Button = ({ text }) => <button>{text}</button>;

//<Button text="hello world" />;

//main Component of the app
export default class FaceNameGame extends Component {
  constructor(props) {
    super(props);
    const dataset = this.getNewDataset();

    this.state = {
      names: dataset["names"],
      rightNumber: dataset["rightNumber"]
    };

    //this.getNewDataset = this.getNewDataset.bind(this);
  }

  //generates a new Dataset with
  getNewDataset = () => ({
    rightNumber: randomNumber(4),
    names: selectedPersons()
  });

  testfunction = title => {
    if (title == this.state.names[this.state.rightNumber]["name"]) {
      //alert("right");

      const dataset = this.getNewDataset();
      this.setState(dataset);
    } else {
      alert("wrong");
    }
  };

  render() {
    var names = this.state.names;
    var rightNumber = this.state.rightNumber;

    return (
      <View style={AppStyle.wrapper}>
        /*
        <StatusBar hidden={true} />
        <View style={AppStyle.pictureContainer}>
          <Picture
            path={names[rightNumber]["image"]}
            style={AppStyle.picture}
          />
        </View>
        <View style={AppStyle.buttonContainer}>
          <Buttons values={names} onClick={title => this.testfunction(title)} />
        </View>
        */
        {/* <Timer /> */}
      </View>
    );
  }
}

/*<View style={AppStyle.statusBarContainer}>
                    <Text style={{backgroundColor: '#00ff00'}}>I am a status bar</Text>
                </View>*/
