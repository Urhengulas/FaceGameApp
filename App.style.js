import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Picture} from "./src/components/Picture/Picture";

const AppStyle = StyleSheet.create({
    //style of whole screen
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },

    //style of container of timer
    timerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ff0000',
        flexGrow: 1,
        padding: 0,
        margin: 0,
    },

    //style of container of the picture
    pictureContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ffff00',
        flexGrow: 5.7,
        width: 'auto',
    },

    //style of picture
    picture: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
    },

    //style of container of buttons
    buttonContainer: {
        flex: 1,
        paddingTop: '1.5%',
        paddingBottom: '1.5%',
        flexGrow: 3.3,
        //backgroundColor: '#f000f0',
    },
});

export {AppStyle};
