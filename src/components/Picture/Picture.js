import React, {Component} from "react";
import {View, Image} from "react-native";
import {PictureStyle} from "./picture.styles";

class Picture extends Component {
    render() {
        return (
            <View style={PictureStyle.imageField}>
                <Image
                    source={this.props.path}
                    //style={Picturestyle.images}
                />
            </View>
        );
    }
}

export {Picture};
