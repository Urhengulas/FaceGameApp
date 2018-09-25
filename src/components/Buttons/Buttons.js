import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View, Button} from "react-native";

import {ButtonsStyle} from "./Buttons.style";
import {NameButton} from "../NameButton/NameButton";

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
                {this.renderNameButton(0)}
                {this.renderNameButton(1)}
                {this.renderNameButton(2)}
                {this.renderNameButton(3)}
            </View>

        );
    }
}

export {Buttons};
