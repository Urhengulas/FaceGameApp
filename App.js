import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
//Components
import { StartScreen } from "./src/components/StartScreen/StartScreen";
import { FaceNameGame } from "./src/components/FaceNameGame/FaceNameGame";
import { EndScreen } from "./src/components/EndScreen/EndScreen";
import { ScoreBoard } from "./src/components/ScoreBoard/ScoreBoard";


//Navigation
const RootStack = createStackNavigator(
  {
    StartScreen: StartScreen,
    FaceNameGame: FaceNameGame,
    EndScreen: EndScreen,
    ScoreBoard: ScoreBoard
  },
  {
    initialRouteName: "StartScreen"
  }
);

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}