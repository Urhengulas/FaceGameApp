import React, { Component } from "react";
import { View } from "react-native";
import { NameButton } from "../NameButton/NameButton";

//export var rightNumber = randomNumber(4);

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //backgroundColor: "#ffffff"
    };
  }

  renderNameButton(i) {
    let name = this.props.values[i]["name"];
    return (
      <NameButton
        name={name}
        onClick={() => this.props.onClick(name)}
        pressed={this.props.pressArray[i]}
      />
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: this.state.backgroundColor
        }}
      >
        {this.renderNameButton(0)}
        {this.renderNameButton(1)}
        {this.renderNameButton(2)}
        {this.renderNameButton(3)}
      </View>
    );
  }
}

export { Buttons };
