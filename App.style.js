import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Picture} from "./src/components/Picture/Picture";

const AppStyle = StyleSheet.create({
    //style of whole screen
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },

    //style of container of status bar
    statusBarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
        height: '10%'
    },

    //style of container of the picture
    pictureContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ffff00',
        //padding: '1%',
        height: '50%',
        //width: '100%'
    },

    //style of picture
    picture: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
    },

    //style of container of buttons
    buttonContainer: {
        //paddingTop: '6%',
        //paddingBottom: '6%',
        height: '30%',
        //backgroundColor: '#f000f0',
        marginBottom: '3%'
    },
});

export {AppStyle};
