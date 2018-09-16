import React, { Component } from "react";
import { View, Image } from "react-native";
import { PictureStyle } from "./picture.styles";

export class Picture extends Component {
  render() {
    return (
      <View style={PictureStyle.imageFieldr}>
        <Image
          source={this.props.path}
          //style={Picturestyle.images}
        />
      </View>
    );
  }
}
