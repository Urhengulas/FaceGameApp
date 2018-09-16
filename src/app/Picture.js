import React, { Component } from "react";
import { View, Image } from "react-native";
import { styles } from "../style.js";

export class Picture extends Component {
  render() {
    return (
      <View style={styles.upper}>
        <Image
          source={this.props.path}
          //style={styles.images}
        />
      </View>
    );
  }
}
