import React, { Component } from "react";
import { Text, TouchableHighlight, View } from "react-native";

import { NameButtonStyle } from "./NameButton.style.js";

class NameButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: this.props.pressed
    };
  }

  render() {
    return (
      <View style={NameButtonStyle.container}>
        <TouchableHighlight
          style={NameButtonStyle.button}
          onPress={this.props.onClick}
        >
          <Text style={NameButtonStyle.text}>{this.props.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

NameButton.defaultProps = {
  pressed: true
};

export { NameButton };
