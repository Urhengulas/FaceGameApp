import React, { Component } from "react";
import { View } from "react-native";
import * as firebase from "firebase";

import { Buttons } from "./src/components/Buttons/Buttons";
import { Picture } from "./src/components/Picture/Picture.js";

import { AppStyle } from "./App.style.js";
import { randomNumber, selectedPersons } from "./src/data/functions.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<YOUR-DATABASE-URL>",
  storageBucket: "<YOUR-STORAGE-BUCKET>"
};
firebase.initializeApp(firebaseConfig);

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

  getNewDataset = () => ({
    rightNumber: randomNumber(4),
    names: selectedPersons()
  });

  testfunction = title => {
    if (title == this.state.names[this.state.rightNumber]["name"]) {
      alert("right");

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
        <Picture name={names[rightNumber]["name"]} />
        <Buttons values={names} onClick={title => this.testfunction(title)} />
      </View>
    );
  }
}
