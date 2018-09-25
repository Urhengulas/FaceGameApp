import React, {Component} from "react";
import {View, Button, TouchableHighlight, StyleSheet, Text} from "react-native";

import {NameButtonStyle} from "./NameButton.style.js";

const NameButton = ({onClick, name}) => (
    <View style={NameButtonStyle.container}>
        <TouchableHighlight
            style={NameButtonStyle.button}
            onPress={onClick}>
            <Text style={NameButtonStyle.text}>{name}</Text>
        </TouchableHighlight>
    </View>
);

export {NameButton};
