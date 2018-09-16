import React, { Component } from "react";
import { View, Button } from "react-native";

import { ButtonsStyle } from "./Buttons.style";
import { randomNumber } from "../../data/functions.js";
import { NameButton } from "../NameButton/NameButton,js";

//export var rightNumber = randomNumber(4);

class Buttons extends Component {
  renderNameButton(i) {
    return (
      <NameButton
        name={this.props.values[i]["name"]}
        onClick={() => this.props.onClick(this.props.values[i]["name"])}
      />
    );
  }

  render() {
    return (
      <View style={ButtonsStyle.ButtonField}>
        <View style={ButtonsStyle.left}>
          {this.renderNameButton(0)}
          {this.renderNameButton(1)}
        </View>

        <View style={ButtonsStyle.right}>
          {this.renderNameButton(2)}
          {this.renderNameButton(3)}
        </View>
      </View>
    );
  }
}

export default { Buttons };
