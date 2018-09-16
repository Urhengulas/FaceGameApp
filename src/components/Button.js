import React, { Component } from "react";
import { View, Button } from "react-native";

import { styles } from "../style.js";
import { randomNumber } from "../data/functions.js";

export var rightNumber = randomNumber(4);

export const NameButton = ({ onClick, name }) => (
  <View style={styles.boxes}>
    <Button onPress={onClick} title={name} color="#000000" />
  </View>
);

export class Buttons extends Component {
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
      <View style={styles.lower}>
        <View style={styles.left}>
          {this.renderNameButton(0)}
          {this.renderNameButton(1)}
        </View>

        <View style={styles.right}>
          {this.renderNameButton(2)}
          {this.renderNameButton(3)}
        </View>
      </View>
    );
  }
}
