import React, {Component} from "react";
import {Button, StyleSheet} from "react-native";

const NameButtonStyle = StyleSheet.create({
    //container for each TouchableHighlight-Button
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        //backgroundColor: '#00ff00'
    },
    //style of the TouchableHighlight-Button
    button: {
        alignItems: 'center',
        backgroundColor: '#009688',
        padding: 9,
        width: '90%',
        borderRadius: 4,
        elevation: 2,
    },
    text: {
        color: '#ffffff',
        padding: '1%',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export {NameButtonStyle};
