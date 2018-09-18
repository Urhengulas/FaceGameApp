import React, { Component } from "react";
import { View, Image } from "react-native";
import { PictureStyle } from "./picture.styles";

class Picture extends Component {
  render() {
    const path = "../images/" + this.props.name + ".png";
    alert(path);
    return (
      <View style={PictureStyle.imageField}>
        <Image
          source={
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Goofy.svg/220px-Goofy.svg.png"
          }
          //style={Picturestyle.images}
        />
      </View>
    );
  }
}

export { Picture };
