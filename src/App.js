import React, { Component } from "react";
import { View } from "react-native";

import { Buttons } from "./components/Button.js";
import { Picture } from "./app/Picture.js";

import { styles } from "./style.js";
import { randomNumber, selectedPersons } from "./data/functions.js";

//const Button = ({ text }) => <button>{text}</button>;

//<Button text="hello world" />;

export default class FaceNameGame extends Component {
  constructor(props) {
    super(props);
    const foo = this.getRandomNumberAndSelectedPersons();

    this.state = { ...foo, anotherState: true };
    this.state.rightNumber;
  }

  getRandomNumberAndSelectedPersons = () => ({
    rightNumber: randomNumber(4),
    names: selectedPersons()
  });

  testfunction = title => {
    if (title == names[rightNumber]["name"]) {
      alert("right");

      const foo = this.getRandomNumberAndSelectedPersons();
      this.setState(foo);
    } else {
      alert("wrong");
    }
  };

  render() {
    const { names, rightNumber } = this.state;

    return (
      <View style={styles.wrapper}>
        <Picture path={names[rightNumber]["image"]} />
        <Buttons values={names} onClick={title => this.testfunction(title)} />
      </View>
    );
  }
}
