import React, { Component } from "react";
import { View } from "react-native";

import { Buttons } from "./components/Buttons./Buttons.js";
import { Picture } from "./components/Picture/Picture.js";

import { AppStyle } from "./App.style";
import { randomNumber, selectedPersons } from "./data/functions.js";

//const Button = ({ text }) => <button>{text}</button>;

//<Button text="hello world" />;

export default class FaceNameGame extends Component {
  constructor(props) {
    super(props);
    const dataset = this.getNewDataset();

    this.state = {
      names: dataset["names"],
      rightNumber: dataset["rightNumber"]
    };
  }

  getNewDataset = () => ({
    rightNumber: randomNumber(4),
    names: selectedPersons()
  });

  testfunction = title => {
    if (title == names[rightNumber]["name"]) {
      alert("right");

      const dataset = this.getNewDataset();
      this.setState(dataset);
    } else {
      alert("wrong");
    }
  };

  render() {
    const { names, rightNumber } = this.state;

    return (
      <View style={AppStyle.wrapper}>
        <Picture path={names[rightNumber]["image"]} />
        <Buttons values={names} onClick={title => this.testfunction(title)} />
      </View>
    );
  }
}
