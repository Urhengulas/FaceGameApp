import React, { Component } from "react";
import { Image, View } from "react-native";
import { PictureStyle } from "./Picture.styles";

class Picture extends Component {
  render() {
    return (
      <View style={PictureStyle.imageField}>
        <Image source={this.props.path} style={PictureStyle.images} />
      </View>
    );
  }
}

export { Picture };
